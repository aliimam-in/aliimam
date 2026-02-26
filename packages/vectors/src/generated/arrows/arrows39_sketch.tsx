
'use client';
import React from 'react';

export interface Arrows39SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows39Sketch = React.forwardRef<SVGSVGElement, Arrows39SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 500 500"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M434.476 47.8704C415.076 57.8704 353.676 80.6706 334.476 85.0706C308.676 91.0706 304.076 94.8706 316.676 100.071C341.876 110.471 402.476 85.0704 402.476 86.8704C402.476 90.4704 232.074 247.27 148.475 325.07C32.875 432.67 15.4748 450.872 22.2748 456.472C36.6748 468.072 48.4748 461.27 102.275 409.27C129.475 383.07 394.474 138.47 403.274 129.87C412.074 121.27 419.476 114.47 419.676 114.67C419.876 114.87 418.274 122.271 416.274 131.071C407.474 167.671 409.076 179.671 423.476 183.271C438.476 187.071 442.676 181.071 450.676 145.071C457.876 112.671 463.476 95.0706 474.476 71.0706C493.476 29.6706 457.676 36.0704 434.476 47.8704Z" />
    </svg>
  )
);

Arrows39Sketch.displayName = "Arrows39Sketch";

export const Arrows39SketchMetadata = {
  id: "arrows39_sketch",
  baseId: "arrows39",
  variant: "sketch",
  name: "Arrows39",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows39Sketch;
