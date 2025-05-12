# OpenBook

OpenBook is a knowledge-based application providing an interactive interface to search for information, have conversations with AI models, and conduct academic research.

## Features

- **Multiple AI Models**: Integration with OpenAI, Google AI, Anthropic, Groq, and XAI
- **Advanced Form System**: Text input with file attachments, drag-and-drop, and clipboard paste support
- **Search Modes**: Standard chat and advanced academic research modes
- **Academic Research Tools**: Paper search, citation formatting, and content analysis
- **Streaming Responses**: Real-time updates for long-running operations

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/openbook.git
cd openbook
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Then edit `.env.local` to add your API keys.

4. Start the development server:
```bash
pnpm dev
```

The application will be available at http://localhost:3000.

## Documentation

Comprehensive documentation is available in the `/docs` folder:

- [Documentation Overview](./docs/overview.md)
- [AI Models Integration](./docs/ai-models.md)
- [Form Component System](./docs/form-component.md)
- [Search Functionality](./docs/search-functionality.md)
- [Project Structure](./docs/project-structure.md)

## Implementation Plan

Check the [Implementation Plan](./plan.md) for development progress and upcoming features.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
