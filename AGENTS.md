---
description: 
alwaysApply: true
---

---
description: 
alwaysApply: true
---

---
description: 
alwaysApply: true
---

# AI Agent Instructions: Next.js Portfolio Architecture

*(Clean, AI-Friendly, Portfolio-Scoped)*

This document defines the **mandatory architecture, conventions, and workflows** for this repository.

It is designed to:

- Enable **high-quality code generation by AI agents (Cursor)**
- Keep the project **simple, readable, and scalable**
- Reflect **design-engineering maturity**, without overengineering

---

## 1. Scope (STRICT)

This repository is a **personal portfolio** built with **Next.js (App Router)**.

### In scope

- Static + content-driven pages
- Typed data models for projects and content
- Reusable UI components
- Design assets living in the repository (Pencil, tokens, frames)
- Fast design → code iteration using AI agents

### Out of scope (DO NOT IMPLEMENT)

- Database (Drizzle), migrations, seeds
- Server architecture layers (Interactors / Repositories / Serializers)
- Authentication or authorization (Lucia, permissions)
- OpenTelemetry / observability
- Heavy testing stacks (Playwright, DB factories)
- Complex server actions or APIs

If a feature requires any of the above, **do not implement it in this repo**.

---

## 2. Goals

- **Predictable structure** so AI agents generate correct code
- **Clear separation of concerns**
- **Type-safe UI and content**
- **Design artifacts live in the repo** to support design-in-code workflows
- Small, readable diffs and frequent commits

---

## 3. Mandatory Folder Structure

    /
    ├── src/
    │   ├── app/                # Next.js App Router (routes + layouts)
    │   ├── components/
    │   │   ├── ui/             # Reusable UI primitives (Button, Card, etc.)
    │   │   └── sections/       # Page sections (Hero, ProjectsGrid, etc.)
    │   ├── content/            # Project content (MDX or typed TS data)
    │   ├── lib/                # Shared utilities, types, constants
    │   └── styles/             # Global styles (if needed)
    ├── design/                 # Pencil frames, tokens, design artifacts
    └── public/                 # Static assets

This structure is **mandatory**.  
Do not introduce parallel or alternative hierarchies.

---

## 4. Path Aliases (MANDATORY)

- Always use the `@/` alias for imports.
- Relative imports (`../../`) are **not allowed**, except for colocated files.

### Correct

    import { Project } from "@/lib/types";
    import { Button } from "@/components/ui/Button";

### Incorrect

    import { Project } from "../../../lib/types";

---

## 5. Naming Conventions (MANDATORY)

Consistency is critical for AI agents.

- folders: `kebab-case`
- components: `PascalCase` (`ProjectCard.tsx`)
- hooks: `camelCase` starting with `use` (`useScroll.ts`)
- utilities: `camelCase` (`formatDate.ts`)
- types / interfaces: `PascalCase`
- avoid barrel exports (`index.ts`)

Files should be **explicit and greppable**.

---

## 6. Components: Server vs Client

- Components are **Server Components by default**
- Add `"use client"` **only when required**:
  - state
  - effects
  - browser APIs
  - animations / interactions

Keep components:

- small
- single-responsibility
- reusable via `components/ui` primitives

---

## 7. Content Model (MANDATORY)

All projects and case studies must be represented as:

- **Typed TypeScript data**, or
- **MDX with frontmatter**

### Rules

- UI renders from data models
- No hardcoded project lists in JSX
- Types must live in `src/lib/`

This ensures content and UI stay decoupled.

---

## 8. Design Assets (MANDATORY)

- All design artifacts live in `/design`
- Pencil frames, tokens, references belong here
- Design is treated as **source material**, not screenshots

This repo follows a **design-in-code workflow**.

---

## 9. AI Agent Workflow (MANDATORY)

When implementing or modifying UI:

1. Add or update design artifact in `/design`
2. Create or update components in `components/sections/*`
3. Reuse primitives from `components/ui/*`
4. Update route files in `src/app/*`
5. Keep diffs small
6. Commit frequently with clear messages

Agents must follow this order strictly.

---

## 10. Testing (Optional – Lightweight)

Testing is **optional**, but encouraged when it adds clarity.

### Guidelines

- Use **Vitest** only
- Focus on:
  - utilities in `lib/`
  - a small number of critical UI components

### Avoid

- Playwright
- integration / E2E tests
- test factories
- coverage enforcement

Testing should support readability, not inflate the repo.

---

## 11. Coding Style Rules

- Use `async / await` consistently
- Prefer explicit types over inference in public APIs
- Use `import type` when possible
- Keep files short and focused
- Optimize for readability over cleverness

---

## 12. Guiding Principle

This repository is intentionally **not** a full web application.

Its purpose is to demonstrate:

- system thinking
- UI architecture
- design-engineering workflow
- collaboration with AI agents

**When in doubt, choose clarity and simplicity.**
