import React from "react";
import { ImageWatermark } from "../src";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Image Watermark Examples</h1>

      <div style={{ marginBottom: "30px" }}>
        <h2>Basic Watermark</h2>
        <ImageWatermark
          src="https://picsum.photos/400/300"
          alt="Sample image with watermark"
          width={400}
          height={300}
          watermark={{
            text: "© 2024 My Company",
            position: "bottom-right",
            opacity: 0.7,
            fontSize: 16,
            color: "white",
          }}
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2>Center Watermark with Rotation</h2>
        <ImageWatermark
          src="https://picsum.photos/400/300"
          alt="Sample image with rotated watermark"
          width={400}
          height={300}
          watermark={{
            text: "CONFIDENTIAL",
            position: "center",
            opacity: 0.3,
            fontSize: 32,
            color: "red",
            rotation: -45,
            fontFamily: "Arial Black, sans-serif",
          }}
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2>Top-Left Watermark</h2>
        <ImageWatermark
          src="https://picsum.photos/400/300"
          alt="Sample image with top-left watermark"
          width={400}
          height={300}
          watermark={{
            text: "DRAFT",
            position: "top-left",
            opacity: 0.8,
            fontSize: 20,
            color: "yellow",
            offsetX: 10,
            offsetY: 10,
          }}
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2>Multiple Watermarks (Custom Styling)</h2>
        <ImageWatermark
          src="https://picsum.photos/400/300"
          alt="Sample image with custom styling"
          width={400}
          height={300}
          watermark={{
            text: "PROPRIETARY",
            position: "center",
            opacity: 0.2,
            fontSize: 48,
            color: "rgba(0, 0, 0, 0.3)",
            rotation: 30,
            fontFamily: "Impact, sans-serif",
          }}
          canvasStyle={{
            filter: "brightness(0.9) contrast(1.1)",
          }}
          style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        />
      </div>
    </div>
  );
};

export default App;
