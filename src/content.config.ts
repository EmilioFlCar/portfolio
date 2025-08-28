import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const experiences = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experiences" }),
  schema: z.object({
    title: z.string(),
    position: z.string(),
    from: z.string(),
    to: z.string(),
    current: z.boolean(),
    link: z.string().url(),
    technologies: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().optional(),
    githubLink: z.string().url().optional(),
    deployLink: z.string().url().optional(),
    technologies: z.array(z.string()),
    images: z.array(z.string()).optional(),
  }),
})

export const collections = { experiences, projects };
