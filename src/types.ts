import { CSSProperties } from "react";

export interface WatermarkOptions {
  text: string;
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center";
  opacity?: number;
  fontSize?: number;
  fontFamily?: string;
  color?: string;
  rotation?: number;
  offsetX?: number;
  offsetY?: number;
}

export interface ImageWatermarkProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  watermark: WatermarkOptions;
  className?: string;
  style?: CSSProperties;
  onLoad?: () => void;
  onError?: (error: Error) => void;
  canvasStyle?: CSSProperties;
  imageStyle?: CSSProperties;
}
