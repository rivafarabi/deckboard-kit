# deckboard-kit
[![Build Status](https://travis-ci.org/rivafarabi/deckboard-kit.svg?branch=master)](https://travis-ci.org/rivafarabi/deckboard-kit)

🚀 **Deckboard app extension starter kit**

## Features

✨ **Modern Development Experience**
- ESLint integration for code quality
- Prettier for consistent code formatting
- EditorConfig for cross-editor consistency
- Pre-configured `.gitignore`

📦 **Optimized Build Process**
- Minimal `.asar` file size
- Automatic exclusion of dev dependencies
- Removal of unnecessary build artifacts
- Smart file filtering

📚 **Comprehensive Documentation**
- Detailed extension development guide
- Well-documented template with examples
- Inline code comments and examples
- Best practices and common patterns

## Install

```bash
npm install -g deckboard-kit
```

## Quick Start

### Create Extension Project

Create a new extension in the Deckboard extensions folder (`%USERPROFILE%\deckboard\extensions\`):

```bash
deckboard-kit --create my-awesome-extension
cd my-awesome-extension
npm install
```

### Development

Your new project includes:
- **index.js** - Main extension code with examples
- **extension.yml** - Extension metadata
- **EXTENSION_GUIDE.md** - Comprehensive development documentation
- **Configuration files** - ESLint, Prettier, EditorConfig

#### Development Commands

```bash
# Lint your code
npm run lint

# Format your code
npm run format

# Build the extension
npm run build

# Build and install directly to Deckboard
npm run install
```

### Package Extension

When ready to share your extension:

```bash
deckboard-kit --build
```

This generates an optimized `.asar` file in the `dist/` folder with:
- Minimal file size
- No dev dependencies
- No test files or documentation
- No build artifacts

### Build Optimizations

The build process automatically excludes:
- Development dependencies
- Test files (`.test.js`, `.spec.js`)
- Documentation files (except README.md)
- IDE configuration folders
- Git files and history
- Cache directories
- Source maps and build artifacts

**Result:** Significantly smaller extension packages for faster loading!

## Extension Structure

```
your-extension/
├── extension.yml          # Extension metadata
├── index.js               # Main extension code
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
├── EXTENSION_GUIDE.md     # Development guide
├── .eslintrc.js           # Linting rules
├── .prettierrc.json       # Code formatting
├── .editorconfig          # Editor settings
└── .gitignore             # Git ignore rules
```

## Extension Configuration (extension.yml)

```yaml
name: Your Extension Name
package: your-extension-name
version: 1.0.0
description: What your extension does
author: Your Name
license: MIT
repository: "https://github.com/yourusername/your-extension"
```

## Basic Extension Example

```javascript
const { Extension, InputTypes, Platforms, Icons, log } = require('deckboard-kit');

class MyExtension extends Extension {
	constructor() {
		super();
		this.name = 'My Extension';
		this.platforms = [Platforms.windows, Platforms.mac, Platforms.linux];
		
		this.inputs = [
			{
				label: 'My Action',
				value: 'my-action',
				icon: 'rocket',
				fontIcon: Icons.Ionicons,
				color: '#8E44AD',
				input: [
					{
						label: 'Parameter',
						ref: 'param1',
						type: InputTypes.text
					}
				]
			}
		];
	}

	initExtension() {
		log.info('Extension initialized');
	}

	execute(action, args) {
		if (action === 'my-action') {
			log.info('Action executed with:', args.param1);
			// Your logic here
		}
	}
}

module.exports = new MyExtension();
```

## Available APIs

### Platforms
- `Platforms.windows` - Windows OS
- `Platforms.mac` - macOS
- `Platforms.linux` - Linux

### Input Methods
- `InputTypes.text` - Text input field
- `InputTypes.select` - Dropdown selection
- `InputTypes.number` - Number input
- `InputTypes.file` - File picker dialog
- `InputTypes.folder` - Folder picker dialog

### Icons
- `Icons.ionicons` - Ionicons (default)
- `Icons.fontAwesomeSolid` - Font Awesome Solid (prefix: 'fas')
- `Icons.fontAwesomeBrand` - Font Awesome Brand (prefix: 'fab')

### Logging
```javascript
log.info('Info message');
log.warn('Warning message');
log.error('Error message');
log.debug('Debug message');
```

## Documentation

Each created extension includes a comprehensive `EXTENSION_GUIDE.md` covering:
- Extension structure and configuration
- Input types and patterns
- Async operations
- Error handling
- Platform-specific code
- Common patterns
- Troubleshooting

## Submit Extension

To add your extension to the official extension list, follow the instructions [here](https://github.com/rivafarabi/deckboard-extensions).

## Example Extensions

Learn by example:
- [Power Control](https://github.com/rivafarabi/deckboard-power-control) - System power operations
- [Steam Launcher](https://github.com/rivafarabi/steam-launcher) - Launch Steam games
- **UWP Launcher** - Launch Windows Store apps (included in this repo)

## Best Practices

✅ **DO:**
- Use ESLint and Prettier for code quality
- Include error handling in all actions
- Use async/await for asynchronous operations
- Log important events and errors
- Test on all target platforms

❌ **DON'T:**
- Include unnecessary dependencies
- Commit node_modules or dist folders
- Use synchronous file operations for large files
- Ignore platform differences

## Troubleshooting

**Extension not loading?**
- Check `extension.yml` format
- Verify `package.json` main field points to `index.js`
- Check Deckboard logs for errors

**Large bundle size?**
- Run `npm run build` instead of manually packaging
- Remove unused dependencies
- Check `.asar` contents with `asar extract`

**Actions not appearing?**
- Ensure `this.inputs` is properly configured
- Verify platform compatibility
- Check for JavaScript syntax errors

## Requirements

- Node.js 12 or higher
- Deckboard app installed

## Development

### Setup

```bash
git clone https://github.com/rivafarabi/deckboard-kit.git
cd deckboard-kit
npm install
```

### Scripts

```bash
npm run build          # Build TypeScript to JavaScript
npm run type-check     # Type check without building
npm run lint           # Check code quality
npm run lint:fix       # Fix linting issues
npm run format         # Format code with Prettier
npm run format:check   # Check formatting
npm run test           # Run tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Generate coverage report
npm run validate       # Run all checks (type-check, lint, format, test)
```

### Code Quality

This project uses:
- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting
- **EditorConfig** for editor consistency
- **Jest** for testing

All contributions are automatically checked via GitHub Actions CI.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Before submitting a PR:
1. Run `npm run validate` to ensure all checks pass
2. Add tests for new features
3. Update documentation as needed

## License

MIT

## Author

Riva Farabi
