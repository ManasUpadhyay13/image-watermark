# React Image Watermark

A React component for adding watermarks to images using canvas rendering. This component renders images as canvas elements to prevent right-click saving and overlays customizable watermarks.

## Features

- 🖼️ **Canvas Rendering**: Images are rendered as canvas to prevent right-click saving
- 📍 **Flexible Positioning**: 5 different watermark positions (top-left, top-right, bottom-left, bottom-right, center)
- 🎨 **Custom Styling**: Full control over text appearance (font, size, color, opacity)
- 🔄 **Rotation Support**: Rotate watermarks at any angle
- 📐 **Offset Control**: Fine-tune watermark positioning with X/Y offsets
- 🎯 **TypeScript Support**: Full TypeScript definitions included
- 📦 **Lightweight**: No external dependencies beyond React

## Installation

```bash
npm install react-image-watermark
```

## Usage

### Basic Example

```tsx
import React from "react";
import { ImageWatermark } from "react-image-watermark";

const App = () => {
  return (
    <ImageWatermark
      src="https://example.com/image.jpg"
      alt="My watermarked image"
      width={400}
      height={300}
      watermark={{
        text: "© 2024 My Company",
        position: "bottom-right",
        opacity: 0.7,
        fontSize: 16,
        color: "white",
      }}
    />
  );
};
```

### Advanced Example with Custom Styling

```tsx
import React from "react";
import { ImageWatermark } from "react-image-watermark";

const App = () => {
  return (
    <ImageWatermark
      src="https://example.com/image.jpg"
      alt="Confidential document"
      width={600}
      height={400}
      watermark={{
        text: "CONFIDENTIAL",
        position: "center",
        opacity: 0.3,
        fontSize: 32,
        color: "red",
        rotation: -45,
        fontFamily: "Arial Black, sans-serif",
        offsetX: 0,
        offsetY: 0,
      }}
      style={{ border: "2px solid #ccc", borderRadius: "8px" }}
      canvasStyle={{ filter: "brightness(0.9)" }}
      onLoad={() => console.log("Image loaded successfully")}
      onError={(error) => console.error("Failed to load image:", error)}
    />
  );
};
```

## API Reference

### ImageWatermark Props

| Prop          | Type                     | Default  | Description                              |
| ------------- | ------------------------ | -------- | ---------------------------------------- |
| `src`         | `string`                 | -        | **Required.** Image source URL           |
| `alt`         | `string`                 | `''`     | Alt text for accessibility               |
| `width`       | `number \| string`       | `'auto'` | Canvas width                             |
| `height`      | `number \| string`       | `'auto'` | Canvas height                            |
| `watermark`   | `WatermarkOptions`       | -        | **Required.** Watermark configuration    |
| `className`   | `string`                 | -        | CSS class name for the canvas            |
| `style`       | `CSSProperties`          | -        | Inline styles for the canvas             |
| `canvasStyle` | `CSSProperties`          | -        | Additional canvas-specific styles        |
| `imageStyle`  | `CSSProperties`          | -        | Styles applied to the image (deprecated) |
| `onLoad`      | `() => void`             | -        | Callback when image loads successfully   |
| `onError`     | `(error: Error) => void` | -        | Callback when image fails to load        |

### WatermarkOptions

| Option       | Type                                                                       | Default                      | Description                     |
| ------------ | -------------------------------------------------------------------------- | ---------------------------- | ------------------------------- |
| `text`       | `string`                                                                   | -                            | **Required.** Watermark text    |
| `position`   | `'top-left' \| 'top-right' \| 'bottom-left' \| 'bottom-right' \| 'center'` | `'center'`                   | Watermark position              |
| `opacity`    | `number`                                                                   | `0.7`                        | Text opacity (0-1)              |
| `fontSize`   | `number`                                                                   | `24`                         | Font size in pixels             |
| `fontFamily` | `string`                                                                   | `'Arial, sans-serif'`        | Font family                     |
| `color`      | `string`                                                                   | `'rgba(255, 255, 255, 0.7)'` | Text color                      |
| `rotation`   | `number`                                                                   | `0`                          | Rotation angle in degrees       |
| `offsetX`    | `number`                                                                   | `0`                          | Horizontal offset from position |
| `offsetY`    | `number`                                                                   | `0`                          | Vertical offset from position   |

## Position Examples

```tsx
// Top-left corner
watermark={{ text: "DRAFT", position: "top-left" }}

// Top-right corner
watermark={{ text: "© 2024", position: "top-right" }}

// Bottom-left corner
watermark={{ text: "CONFIDENTIAL", position: "bottom-left" }}

// Bottom-right corner
watermark={{ text: "My Company", position: "bottom-right" }}

// Center (default)
watermark={{ text: "WATERMARK", position: "center" }}
```

## Styling Examples

```tsx
// Rotated watermark
watermark={{ text: "CONFIDENTIAL", rotation: -45 }}

// Custom font and color
watermark={{
  text: "PROPRIETARY",
  fontFamily: "Impact, sans-serif",
  color: "red",
  fontSize: 32
}}

// Semi-transparent
watermark={{ text: "DRAFT", opacity: 0.3 }}

// With offset
watermark={{
  text: "© 2024",
  position: "bottom-right",
  offsetX: -10,
  offsetY: -10
}}
```

## Development

### Setup

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Build for production
npm run build
```

### Testing Locally

1. Build the package: `npm run build`
2. In your test project: `npm install /path/to/react-image-watermark`
3. Import and use the component

## Publishing to NPM

### First Time Setup

1. **Create NPM account**: Sign up at [npmjs.com](https://www.npmjs.com)

2. **Login to NPM**:

   ```bash
   npm login
   ```

3. **Update package.json**:

   - Ensure the `name` is unique (check npmjs.com)
   - Set the correct `version`
   - Add your details to `author`

4. **Build the package**:

   ```bash
   npm run build
   ```

5. **Publish**:
   ```bash
   npm publish
   ```

### Updating the Package

1. **Update version** in `package.json`:

   ```bash
   npm version patch  # for bug fixes
   npm version minor  # for new features
   npm version major  # for breaking changes
   ```

2. **Build and publish**:
   ```bash
   npm run build
   npm publish
   ```

### Testing Your Published Package

1. **Create a test project**:

   ```bash
   npx create-react-app test-watermark
   cd test-watermark
   ```

2. **Install your package**:

   ```bash
   npm install react-image-watermark
   ```

3. **Use in your app**:
   ```tsx
   import { ImageWatermark } from "react-image-watermark";
   // ... use the component
   ```

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
