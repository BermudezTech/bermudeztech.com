import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  images: string[];
  problemHtml?: string;
  challengeHtml?: string;
  solutionHtml?: string;
  contentHtml?: string;
  category: "highlighted" | "others" | "playground";
}

const PROJECTS_ROOT = path.join(process.cwd(), "app", "projects");
const CATEGORIES: ("highlighted" | "others" | "playground")[] = [
  "highlighted",
  "others",
  "playground",
];

// Helper to convert frontmatter raw fields into standard Project fields
function parseMatterData(id: string, data: any, category: "highlighted" | "others" | "playground"): Project {
  const images = Array.isArray(data.images) ? data.images : [];
  
  // Use explicitly defined image or fallback to the first element in images
  const image = data.image || (images.length > 0 ? images[0] : undefined);

  return {
    id: data.id || id,
    title: data.title || "Sin título",
    subtitle: data.subtitle || "",
    description: data.description || "",
    tags: Array.isArray(data.stack) ? data.stack : (Array.isArray(data.tags) ? data.tags : []),
    githubUrl: data.github || data.githubUrl || "",
    liveUrl: data.live || data.liveUrl || "",
    image,
    images,
    category,
  };
}

// Extract special sections from markdown body
function extractSections(content: string) {
  const sections = {
    description: "",
    problem: "",
    challenge: "",
    solution: "",
  };

  const problemRegex = /^(?:#+\s+)(?:🚨\s+)?El\s+Problema\b/im;
  const challengeRegex = /^(?:#+\s+)(?:⚙️\s+)?El\s+Reto\s+Técnico\b/im;
  const solutionRegex = /^(?:#+\s+)(?:💡\s+)?La\s+Solución\b/im;

  const matches: { key: "problem" | "challenge" | "solution"; index: number; headingLength: number }[] = [];

  const pMatch = content.match(problemRegex);
  if (pMatch && pMatch.index !== undefined) {
    matches.push({ key: "problem", index: pMatch.index, headingLength: pMatch[0].length });
  }

  const cMatch = content.match(challengeRegex);
  if (cMatch && cMatch.index !== undefined) {
    matches.push({ key: "challenge", index: cMatch.index, headingLength: cMatch[0].length });
  }

  const sMatch = content.match(solutionRegex);
  if (sMatch && sMatch.index !== undefined) {
    matches.push({ key: "solution", index: sMatch.index, headingLength: sMatch[0].length });
  }

  matches.sort((a, b) => a.index - b.index);

  if (matches.length === 0) {
    sections.description = content;
  } else {
    sections.description = content.substring(0, matches[0].index);

    for (let i = 0; i < matches.length; i++) {
      const start = matches[i].index + matches[i].headingLength;
      const end = i + 1 < matches.length ? matches[i + 1].index : content.length;
      sections[matches[i].key] = content.substring(start, end).trim();
    }
  }

  return sections;
}

export function getProjects() {
  const allProjects: Project[] = [];

  for (const category of CATEGORIES) {
    const dirPath = path.join(PROJECTS_ROOT, category);
    if (!fs.existsSync(dirPath)) continue;

    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      if (!file.endsWith(".md")) continue;

      const filePath = path.join(dirPath, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      const id = file.replace(/\.md$/, "");

      allProjects.push(parseMatterData(id, data, category));
    }
  }

  return {
    highlighted: allProjects.filter((p) => p.category === "highlighted"),
    others: allProjects.filter((p) => p.category === "others"),
    playground: allProjects.filter((p) => p.category === "playground"),
  };
}

export async function getProjectById(id: string): Promise<Project | null> {
  for (const category of CATEGORIES) {
    const filePath = path.join(PROJECTS_ROOT, category, `${id}.md`);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      
      const project = parseMatterData(id, data, category);
      
      // Extract sections from body content
      const sections = extractSections(content);
      
      // Parse markdown sections to HTML
      if (sections.description) {
        project.contentHtml = await marked.parse(sections.description);
      }
      
      // Check if sections exist in body. If not, fallback to frontmatter data
      const problemText = sections.problem || data.problem || "";
      const challengeText = sections.challenge || data.challenge || "";
      const solutionText = sections.solution || data.solution || "";

      if (problemText) {
        project.problemHtml = await marked.parse(problemText);
      }
      if (challengeText) {
        project.challengeHtml = await marked.parse(challengeText);
      }
      if (solutionText) {
        project.solutionHtml = await marked.parse(solutionText);
      }
      
      return project;
    }
  }
  return null;
}
