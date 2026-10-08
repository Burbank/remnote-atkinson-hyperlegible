# Atkinson Hyperlegible for RemNote

A RemNote plugin that applies the Atkinson Hyperlegible Next font throughout the RemNote interface and your notes for enhanced readability.

## About the Font

Atkinson Hyperlegible Next is a typeface designed by the [Braille Institute](https://www.brailleinstitute.org/) specifically for greater legibility and readability. It focuses on letterform distinction to increase character recognition, ultimately improving comprehension. The design features:

- Enhanced character differentiation
- Optimized for low vision readers
- Improved readability at small sizes
- Clean, modern appearance
- 7 weights from ExtraLight to ExtraBold

This plugin uses Atkinson Hyperlegible Next, the 2024 improved version of the original Atkinson Hyperlegible font, with expanded character sets and refined kerning.

## What This Plugin Does

This plugin applies the Atkinson Hyperlegible Next font to:

- All interface text in RemNote
- Your note content
- Editor areas
- Menus and dialogs

**Code blocks and inline code remain in monospace fonts** for optimal code readability.

## Installation

### From RemNote Plugin Store

1. Open RemNote
2. Go to Settings → Plugins
3. Search for "Atkinson Hyperlegible"
4. Click Install

### Manual Installation

1. Download `PluginZip.zip` from the [releases page](https://github.com/Burbank/remnote-atkinson-hyperlegible/releases)
2. Open RemNote → Settings → Plugins
3. Click "Upload Plugin"
4. Select the downloaded zip file

## Building from Source

```bash
# Install dependencies
npm install

# Build the plugin
npm run build
```

This creates `PluginZip.zip` which can be uploaded to RemNote.

## License

### Plugin Code

MIT License - see [LICENSE](LICENSE) file

### Atkinson Hyperlegible Next Font

The Atkinson Hyperlegible Next font files included in this plugin are licensed under the **SIL Open Font License, Version 1.1**.

Copyright 2020-2024 The Atkinson Hyperlegible Next Project Authors  
https://github.com/googlefonts/atkinson-hyperlegible-next

See [FONT_LICENSE.txt](FONT_LICENSE.txt) for the complete font license.

## Credits

- **Font Design**: [Braille Institute of America](https://www.brailleinstitute.org/)
- **Plugin**: Burbank
- **Font Project**: [Atkinson Hyperlegible Next on GitHub](https://github.com/googlefonts/atkinson-hyperlegible-next)

## Technical Details

- **Plugin ID**: `atkinson-hyperlegible`
- **Version**: 1.0.0
- **Requires Native**: No (runs in sandbox)
- **Mobile Support**: Yes
- **Required Scopes**: None

## Repository

https://github.com/Burbank/remnote-atkinson-hyperlegible

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/Burbank/remnote-atkinson-hyperlegible/issues) on GitHub.
