# Base stage for shared variables and configs
FROM node:20-slim AS base
WORKDIR /app

# Stage 1: Install dependencies (requires build-essential for better-sqlite3 compilation)
FROM base AS deps
COPY package.json package-lock.json ./
RUN apt-get update && apt-get install -y python3 build-essential && rm -rf /var/lib/apt/lists/*
RUN npm ci

# Stage 2: Build the application
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Stage 3: Production runner stage
FROM base AS runner

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV NEXT_TELEMETRY_DISABLED=1

# SQLite database storage directory (for volume mounting)
RUN mkdir -p /app/data
ENV DATABASE_URL="/app/data/sqlite.db"

# Create a secure non-root system user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy public static files
COPY --from=builder /app/public ./public

# Setup .next cache directory with write permission
RUN mkdir .next && chown nextjs:nodejs .next

# Leverage Next.js output standalone feature to minimize image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Ensure the database data directory is writable by nextjs user
RUN chown -R nextjs:nodejs /app/data

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
