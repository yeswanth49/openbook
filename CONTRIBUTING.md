# Contributing to OpenBook

Thank you for your interest in contributing to OpenBook! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

Please be respectful and considerate of others when contributing to this project. We expect all contributors to adhere to the following principles:

- Be respectful of differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what's best for the community and the project
- Show empathy towards other community members

## How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with the following information:

- A clear, descriptive title
- Steps to reproduce the bug
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Environment information (browser, OS, etc.)

### Suggesting Features

We welcome feature suggestions! Please create an issue with:

- A clear, descriptive title
- A detailed description of the proposed feature
- Any relevant mockups or examples
- Explanation of why this feature would be valuable

### Pull Requests

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Run tests to ensure everything works
5. Commit your changes (`git commit -m 'Add some feature'`)
6. Push to the branch (`git push origin feature/your-feature`)
7. Create a Pull Request

### Pull Request Guidelines

- Follow the existing code style and conventions
- Update documentation for any changed functionality
- Include tests for new features
- Keep pull requests focused on a single concern
- Link to any relevant issues

## Development Setup

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

4. Start the development server:
```bash
pnpm dev
```

## Code Style

- Use TypeScript for all new code
- Follow the existing code formatting style (enforced by ESLint)
- Use descriptive variable and function names
- Write comments for complex logic
- Add JSDoc for public-facing functions

## Testing

- Write tests for all new features
- Ensure existing tests pass before submitting a PR
- Run tests with `pnpm test`

## Documentation

- Update documentation for any changed functionality
- Document new components in their own markdown files
- Follow the existing documentation format
- Add code examples where appropriate

## Commit Messages

Follow conventional commits format:

- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding or modifying tests
- `chore:` for maintenance tasks

## Review Process

1. At least one core maintainer will review your PR
2. Feedback may be provided for changes or improvements
3. Once approved, your PR will be merged

## Thank You

Your contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contribution you make is greatly appreciated! 