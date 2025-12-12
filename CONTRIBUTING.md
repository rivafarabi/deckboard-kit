# Contributing to deckboard-kit

Thank you for your interest in contributing to deckboard-kit!

## Development Setup

### Prerequisites
- Node.js 14 or higher
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/rivafarabi/deckboard-kit.git
   cd deckboard-kit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

## Development Workflow

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/my-new-feature
   ```

2. **Make your changes**
   - Edit files in the `src/` directory
   - Write in TypeScript
   - Follow the existing code style

3. **Run linting**
   ```bash
   npm run lint
   ```
   
   Or auto-fix issues:
   ```bash
   npm run lint:fix
   ```

4. **Format your code**
   ```bash
   npm run format
   ```

5. **Type check**
   ```bash
   npm run type-check
   ```

6. **Run tests**
   ```bash
   npm run test
   ```

7. **Validate everything**
   ```bash
   npm run validate
   ```
   This runs type checking, linting, formatting check, and tests all at once.

### Code Standards

#### TypeScript
- Use TypeScript for all new code
- Enable strict type checking
- Avoid `any` types when possible
- Use interfaces for object shapes
- Export types for public APIs

#### Code Style
- Use single quotes for strings
- Use tabs for indentation
- Add semicolons
- No trailing spaces
- Max line length: 100 characters
- Use template literals for string interpolation

#### Naming Conventions
- **Classes**: PascalCase (`Extension`, `InputMethod`)
- **Functions/Methods**: camelCase (`execute`, `initExtension`)
- **Interfaces**: PascalCase with `I` prefix optional (`IExtension` or `Extension`)
- **Types**: PascalCase (`ButtonInput`, `ConfigInput`)

#### Comments
- Use JSDoc for public APIs
- Explain "why" not "what"
- Keep comments up to date

Example:
```typescript
/**
 * Initializes the extension when it's loaded by Deckboard
 * @returns Promise that resolves when initialization is complete
 */
async initExtension(): Promise<void> {
	// Implementation
}
```

### Testing

- Write tests for new features
- Update tests when changing existing code
- Aim for high code coverage
- Run tests before committing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Building

```bash
# Build TypeScript to JavaScript
npm run build

# Type check without building
npm run type-check
```

The build output goes to the `dist/` directory.

## Project Structure

```
deckboard-kit/
├── src/                    # Source code (TypeScript)
│   ├── index.ts            # Main entry point
│   ├── Extension.ts        # Extension base class
│   ├── enum.ts             # Enums (InputTypes, Platforms, Icons)
│   ├── utils.ts            # Utility functions
│   └── types/              # TypeScript type definitions
│       ├── button-input.ts
│       └── config-input.ts
├── dist/                   # Compiled output (Git ignored)
├── .eslintrc.js            # ESLint configuration
├── .prettierrc.json        # Prettier configuration
├── .editorconfig           # Editor configuration
├── tsconfig.json           # TypeScript configuration
├── jest.config.js          # Jest configuration
└── package.json            # Package metadata
```

## Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new features
3. **Run validation**: `npm run validate`
4. **Update CHANGELOG.md** with your changes
5. **Create a pull request** with a clear description

### PR Checklist

- [ ] Code follows the style guidelines
- [ ] All tests pass
- [ ] Linting passes
- [ ] Type checking passes
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
- [ ] No breaking changes (or clearly documented)

## Common Tasks

### Adding a New Enum

1. Add to `src/enums.ts`
2. Export it
3. Update documentation
4. Add TypeScript types if needed

### Fixing a Bug

1. Write a test that reproduces the bug
2. Fix the bug
3. Ensure the test passes
4. Add regression test

## Release Process

(For maintainers)

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Commit changes
4. Create git tag
5. Push to GitHub
6. Publish to npm

```bash
npm version patch|minor|major
git push origin main --tags
npm publish
```

## Code Review

All contributions require code review. Things we look for:

- **Correctness**: Does it work as intended?
- **Tests**: Are there appropriate tests?
- **Style**: Does it follow our guidelines?
- **Documentation**: Is it well documented?
- **Performance**: Is it reasonably efficient?
- **Compatibility**: Does it maintain backward compatibility?

## Getting Help

- **Questions**: Open a discussion on GitHub
- **Bugs**: Open an issue with reproduction steps
- **Features**: Open an issue to discuss before implementing

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the project

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to deckboard-kit! 🎉
