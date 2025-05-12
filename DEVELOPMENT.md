# Development Guide

This document provides detailed instructions for setting up and working with the OpenBook development environment.

## Prerequisites

- **Node.js**: Version 18.x or higher
- **pnpm**: As the package manager
- **Git**: For version control
- **API Keys**: For various AI providers

## Initial Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/openbook.git
   cd openbook
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file in the project root with the following variables:
   ```
   # OpenAI
   OPENAI_API_KEY=your_openai_api_key
   
   # Google AI
   GOOGLE_AI_API_KEY=your_google_ai_api_key
   
   # Anthropic
   ANTHROPIC_API_KEY=your_anthropic_api_key
   
   # Groq
   GROQ_API_KEY=your_groq_api_key
   
   # XAI
   XAI_API_KEY=your_xai_api_key
   
   # Search providers
   TAVILY_API_KEY=your_tavily_api_key
   EXA_API_KEY=your_exa_api_key
   
   # Vercel Blob Storage (for file uploads)
   BLOB_READ_WRITE_TOKEN=your_vercel_blob_token
   ```

4. **Start the development server**:
   ```bash
   pnpm dev
   ```
   The application will be available at http://localhost:3000.

## Development Workflow

### Branching Strategy

- `main`: Main production branch, should always be deployable
- `dev`: Development branch for integrating features
- `feature/*`: Feature branches for new features
- `fix/*`: Fix branches for bug fixes
- `docs/*`: Documentation updates

### Commit Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

Example: `feat(form): add drag-and-drop file support`

### Pull Request Process

1. Create a branch from `dev` for your feature or fix
2. Make your changes with appropriate commits
3. Push your branch to GitHub
4. Create a pull request to merge into `dev`
5. Request a review from a team member
6. Address any feedback or requested changes
7. Once approved, your PR will be merged

## Project Structure

The project follows the Next.js App Router structure:

```
openbook/
├── app/                  # Next.js application
│   ├── api/              # API routes
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/           # React components
├── contexts/             # React contexts
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and libraries
├── public/               # Static assets
└── docs/                 # Documentation
```

## Code Style

The project uses ESLint for code linting:

```bash
# Run ESLint
pnpm lint

# Fix automatic issues
pnpm lint --fix
```

## Testing

The project uses Jest for testing:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## Useful Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production build locally
pnpm start

# Analyze bundle size
pnpm analyze

# Check for unused dependencies and files
pnpm knip
```

## Deployment

The project is configured for deployment on Vercel:

1. Push changes to the GitHub repository
2. Vercel will automatically deploy the `main` branch
3. Preview deployments are created for all branches

Alternatively, you can manually deploy:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to development
vercel

# Deploy to production
vercel --prod
```

## Troubleshooting

### Common Issues

1. **API Key Issues**:
   - Ensure all API keys are correctly set in `.env.local`
   - Verify API keys are valid and have not expired

2. **Build Errors**:
   - Check for TypeScript errors with `pnpm tsc`
   - Make sure all dependencies are installed with `pnpm install`

3. **Missing File Upload Support**:
   - Verify Vercel Blob storage is configured correctly
   - Check `BLOB_READ_WRITE_TOKEN` in your environment variables

4. **AI Model Integration Issues**:
   - Each model provider requires a valid API key
   - Some models have rate limits that may affect development

### Getting Help

If you encounter issues not covered here:
1. Check existing GitHub issues
2. Join the development Discord channel
3. Reach out to the core maintainers 