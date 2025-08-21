# Development Instructions for GitHub Copilot 

## Project Overview
This is a **Next.js 15** project using shadcn/ui v4 for components and **Tailwind CSS** v4 for styling, **TypeScript** for type safety.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **UI Components**: shadcn/ui v4
- **Styling**: Tailwind CSS v4
- **TypeScript** for type safety

## Code Style & Preferences
- Use functional components with React hooks.
- Use TypeScript with explicit prop types (`type` or `interface`).
- Naming:
  - **Files**: kebab-case (`user-profile.tsx`)
  - **Components**: PascalCase (`UserProfile`)
  - **Functions/vars**: camelCase (`fetchUserData`)
- Use `async/await` for async operations.
- Avoid `any`; prefer stricter types.

### Next.js Conventions
- Use **App Router** (app directory structure)
- Follow Next.js 15 patterns for file-based routing
- Create client components in the `/components/client` directory

### Component Architecture
- Use shadcn/ui components from shadcn mcp server
- When available import shadcn components from `@/components/ui/[component-name]`

### Styling Conventions
- **Make all components responsive** across mobile, tablet, and desktop

### File Structure
```
/app
  layout.tsx
  page.tsx
/components
  /ui (shadcn components)
  /client (client components)
```
## Code Generation Rules
- The content generated for the website should be in spanish.
- **Include imports** for all shadcn components used.
- Remember to use shadcn/ui v4 components from shadcn mcp server whenever possible.
- I will be passing screenshots for reference please follow the design closely. Make sure to match the layout and overall aesthetics.
