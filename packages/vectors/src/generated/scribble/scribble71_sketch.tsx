
'use client';
import React from 'react';

export interface Scribble71SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Scribble71Sketch = React.forwardRef<SVGSVGElement, Scribble71SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 96 96"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <defs></defs><title>scribble final version</title><g id="Layer_1" data-name="Layer 1"><path  d="M42.49,84.09c2.3-15.26,1.77-31.05,2.58-46.44.22-4.18-6.28-4.17-6.5,0-.78,14.79-.14,30.05-2.34,44.71-.62,4.1,5.64,5.86,6.26,1.73Z"/><path  d="M56.5,83.23c.14-14.15,0-28.19,2.21-42.21.63-4.1-5.63-5.86-6.27-1.73C50.17,53.91,50.14,68.47,50,83.23c0,4.18,6.46,4.18,6.5,0Z"/><path  d="M26,46.09A104.18,104.18,0,0,1,37.13,28.63c3.29-4.13,10.38-13.27,16.6-12.35.4.06.49.12,1.31.84a18.45,18.45,0,0,1,2.63,3.08,65.66,65.66,0,0,1,5,8.34,75.21,75.21,0,0,1,7,17.39c1,4.39,7.77,2.53,6.75-1.86-1.77-7.56-5.35-15-9.14-21.72-2.66-4.71-6.7-12.45-12.83-13-7.71-.74-15,6.06-19.66,11.29A104.6,104.6,0,0,0,20,42.56c-2.06,4,4,7.54,6,3.53Z"/></g>
    </svg>
  )
);

Scribble71Sketch.displayName = "Scribble71Sketch";

export const Scribble71SketchMetadata = {
  id: "scribble71_sketch",
  baseId: "scribble71",
  variant: "sketch",
  name: "Scribble71",
  category: "scribble",
  tags: [],
  viewBox: "0 0 96 96",
} as const;

export default Scribble71Sketch;
