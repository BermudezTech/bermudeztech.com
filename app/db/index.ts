import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";

export const sqlite = new Database(process.env.DATABASE_URL ?? "sqlite.db");

// Ensure the cache table exists
sqlite.exec(`
  CREATE TABLE IF NOT EXISTS youtube_cache (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at INTEGER NOT NULL
  )
`);

export const db = drizzle({ client: sqlite });
