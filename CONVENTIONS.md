# CONVENTIONS.md

## Project Conventions & Contribution Guidelines

**Always:**
- Use `<script setup>` + Composition API
- Use TypeScript (strict)
- Follow existing project patterns
- Prefer composables over duplicated logic

**File conventions:**
- Components: PascalCase.vue
- Composables: useSomething.ts
- API routes: server/api/[...].ts

**Do not:**
- Use `any`
- Mutate props
- Use Options API

### General Conventions
- Documentation is in English.
- Comments in code - in Russian (informal)
- Use Markdown for all artifacts.
- Use kebab-case for directories and files when possible.
- Follow `.editorconfig` (the canonical source for formatting and editor settings).
- All code must be readable and maintainable.
- Prefer explicit over implicit.
- Follow language-specific community standards (TypeScript, CSS, etc.).

### Code Style
- Use consistent formatting via the root `.editorconfig` file.

### Contribution Workflow

### Naming & Structure
- Industry-wide / permanent information (like `AGENTS.md` etc) lives at the repository root.
- Feature-specific specifications live in `openspec/specs/`.

See also: `AGENTS.md`, `GLOSSARY.md`, `.editorconfig` if present