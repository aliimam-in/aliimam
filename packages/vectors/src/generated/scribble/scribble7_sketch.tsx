
'use client';
import React from 'react';

export interface Scribble7SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Scribble7Sketch = React.forwardRef<SVGSVGElement, Scribble7SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 96 96"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <defs></defs><title>scribble final version</title><g id="Layer_1" data-name="Layer 1"><path fill="currentColor"  d="M44.81,26A29.21,29.21,0,0,0,59.48,9.31C59.64,8.87,62.24,23.65,71,26.5c0,0-10.6,5.08-13.11,15.14C57.9,41.78,57.29,33.65,44.81,26Z"/><path fill="currentColor"  d="M60.1,73.87A24,24,0,0,0,72.16,60.11c.13-.36,2.26,11.8,9.5,14.14,0,0-8.71,4.18-10.78,12.45C70.85,86.81,70.35,80.13,60.1,73.87Z"/><path fill="currentColor"  d="M14.34,55.39A23.27,23.27,0,0,0,26,42.11c.12-.36,2.19,11.38,9.18,13.64,0,0-8.42,4-10.41,12C24.72,67.88,24.24,61.43,14.34,55.39Z"/></g>
    </svg>
  )
);

Scribble7Sketch.displayName = "Scribble7Sketch";

export const Scribble7SketchMetadata = {
  id: "scribble7_sketch",
  baseId: "scribble7",
  variant: "sketch",
  name: "Scribble7",
  category: "scribble",
  tags: [],
  viewBox: "0 0 96 96",
} as const;

export default Scribble7Sketch;
