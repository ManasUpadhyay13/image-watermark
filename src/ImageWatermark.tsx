import React, { useRef, useEffect, useState, useCallback } from "react";
import { ImageWatermarkProps, WatermarkOptions } from "./types";

const ImageWatermark: React.FC<ImageWatermarkProps> = ({
  src,
  alt = "",
  width,
  height,
  watermark,
  className,
  style,
  onLoad,
  onError,
  canvasStyle,
  imageStyle,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const drawWatermark = useCallback(
    (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
      // Clear canvas
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      // Draw the image
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);

      // Set watermark properties
      ctx.font = `${watermark.fontSize || 24}px ${
        watermark.fontFamily || "Arial, sans-serif"
      }`;
      ctx.fillStyle = watermark.color || "rgba(255, 255, 255, 0.7)";
      ctx.globalAlpha = watermark.opacity || 0.7;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Calculate position
      const { x, y } = calculateWatermarkPosition(
        ctx.canvas.width,
        ctx.canvas.height,
        watermark
      );

      // Apply rotation if specified
      if (watermark.rotation) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((watermark.rotation * Math.PI) / 180);
        ctx.fillText(watermark.text, 0, 0);
        ctx.restore();
      } else {
        ctx.fillText(watermark.text, x, y);
      }

      // Reset global alpha
      ctx.globalAlpha = 1;
    },
    [watermark]
  );

  const calculateWatermarkPosition = (
    canvasWidth: number,
    canvasHeight: number,
    options: WatermarkOptions
  ) => {
    const offsetX = options.offsetX || 0;
    const offsetY = options.offsetY || 0;

    switch (options.position) {
      case "top-left":
        return { x: 50 + offsetX, y: 30 + offsetY };
      case "top-right":
        return { x: canvasWidth - 50 + offsetX, y: 30 + offsetY };
      case "bottom-left":
        return { x: 50 + offsetX, y: canvasHeight - 30 + offsetY };
      case "bottom-right":
        return {
          x: canvasWidth - 50 + offsetX,
          y: canvasHeight - 30 + offsetY,
        };
      case "center":
      default:
        return { x: canvasWidth / 2 + offsetX, y: canvasHeight / 2 + offsetY };
    }
  };

  const loadImage = useCallback(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Set canvas dimensions
      if (width && height) {
        canvas.width = typeof width === "number" ? width : parseInt(width);
        canvas.height = typeof height === "number" ? height : parseInt(height);
      } else {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
      }

      // Draw image with watermark
      drawWatermark(ctx, img);

      setIsLoaded(true);
      onLoad?.();
    };

    img.onerror = (e) => {
      const error = new Error(`Failed to load image: ${src}`);
      setError(error);
      onError?.(error);
    };

    img.src = src;
  }, [src, width, height, drawWatermark, onLoad, onError]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

  useEffect(() => {
    if (isLoaded && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const img = new Image();
        img.onload = () => drawWatermark(ctx, img);
        img.src = src;
      }
    }
  }, [watermark, isLoaded, src, drawWatermark]);

  if (error) {
    return (
      <div
        className={className}
        style={{
          width: width || "auto",
          height: height || "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
          color: "#666",
          ...style,
        }}
      >
        Failed to load image
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: width || "auto",
        height: height || "auto",
        maxWidth: "100%",
        ...canvasStyle,
        ...style,
      }}
      {...(alt && { "aria-label": alt })}
    />
  );
};

export default ImageWatermark;
