# OpenBook Agent Guidelines

## Commands
- **Dev**: `pnpm dev` (starts Next.js with Turbopack)
- **Build**: `pnpm build` (production build, run to check TypeScript)
- **Lint**: `pnpm lint` or `pnpm lint:fix` (ESLint with auto-fix)
- **Format**: `pnpm format` or `pnpm format:check` (Prettier)
- **Analyze**: `pnpm analyze` (bundle analysis)

## Architecture
- **Next.js 15** app router with TypeScript
- **AI Features**: Multi-model support (@ai-sdk/react, Anthropic, Google, OpenAI, Groq, XAI)
- **Key Contexts**: SpacesContext (chat history), StudyModeContext (learning modes)
- **UI**: Tailwind CSS v4, Radix UI, Framer Motion animations
- **Structure**: `app/` (routes), `components/` (UI/features), `contexts/` (state), `lib/` (utils)

## Code Style
- **Imports**: Use `@/` path aliases, group by external → internal → relative
- **Components**: Functional components with TypeScript, use `React.FC` for props
- **Naming**: camelCase variables, PascalCase components, kebab-case files
- **State**: Prefer React hooks, use `useCallback`/`useMemo` for optimization
- **Styling**: Tailwind classes with `cn()` utility for conditional styles
- **Error Handling**: Use `toast.error()` from Sonner for user feedback
- **Types**: Define interfaces for props, avoid `any`, use Zod for validation
