
'use client';
import React from 'react';

export interface Abstract48SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Abstract48Sketch = React.forwardRef<SVGSVGElement, Abstract48SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 446 446"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M273.104 198.243C242.691 165.156 184.873 212.724 213.393 247.37C231.997 269.985 271.433 245.922 258.288 220.077C253.832 211.387 243.026 206.375 235.45 206.821C226.092 207.378 224.199 219.632 229.212 227.43C233.445 233.892 246.368 233.446 239.349 226.428C236.453 223.531 231.328 217.403 237.455 215.064C242.58 213.058 245.142 216.847 246.702 221.972C249.264 230.661 246.479 240.909 236.564 247.148C226.872 253.163 209.605 228.322 228.877 204.036C256.394 169.501 277.56 223.42 254.946 264.305C212.167 341.284 149.113 278.564 189.33 198.8C202.364 172.955 217.737 157.47 239.238 148.335C251.938 142.876 237.01 134.632 227.875 144.213C225.647 146.552 220.857 150.451 217.18 152.902C159.14 191.67 140.758 284.469 187.324 302.627C244.474 324.908 312.986 241.579 273.104 198.243Z" />
    </svg>
  )
);

Abstract48Sketch.displayName = "Abstract48Sketch";

export const Abstract48SketchMetadata = {
  id: "abstract48_sketch",
  baseId: "abstract48",
  variant: "sketch",
  name: "Abstract48",
  category: "abstract",
  tags: [],
  viewBox: "0 0 446 446",
} as const;

export default Abstract48Sketch;
