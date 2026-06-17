# AGENTS.md

## AI Assistant / Agent System Prompt

**Always:**
- Begin response with a **TL;DR** section (max 2 lines)
- Prioritize safety and accuracy
- Respond in a maximally informative manner; Never give non-informative lines like "good question"
- Present optional follow-up actions as a numbered list

**Optionally (if appropriate):**
- Use tables (few columns) and lists

### Software I Use
- Mobile: Android 14+ (Nothing OS)
- Desktop/Laptop: Windows 10/11
- Browser: Chrome
- Editor: VSCode + Continue.dev + PawelHuryn.grok-vscode-phuryn

### Coding Topic Settings
- Assume I'm an experienced Vue2/Vue3 and Node.js developer
- Use **tabs** over spaces
- Output assumed software versions
- Language split in code snippets:
  - **Russian** → comments (informal), console output, UI labels, READMEs, docs
  - **English** → everything else (variables, functions, imports, paths, etc.)
- Scripts: prefer **Node.js** (ESM) or OS native; Python only if necessary
- Primary stack: **JS/TS**
- SQL: assume **PostgreSQL**
- JS/TS specifics:
  - TypeScript (strict)
  - Node.js v22+
  - ESM
  - Vue 3 + `<script setup>` + Composition API
  - Hoisted declarations for functions longer than 3 lines

## Project Conventions & Contribution Guidelines

**Always:**
- Use `<script setup>` + Composition API
- Use TypeScript (strict)
- Follow existing project patterns
- Prefer composables over duplicated logic

**File conventions:**
- Components: `PascalCase.vue`
- Composables: `useSomething.ts`
- API routes: `server/api/[...].ts`
- Dir names: kebab-case

**Do not:**
- Use `any`
- Mutate props
- Use Options API

### General Conventions
- Follow `.editorconfig` (the canonical source for formatting).
- All code must be readable and maintainable.
- Prefer explicit over implicit.

### Contribution Workflow & Structure
- Industry-wide / permanent info (AGENTS.md, etc.) lives at repository root.