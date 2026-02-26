
'use client';
import React from 'react';

export interface Arrows30SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows30Sketch = React.forwardRef<SVGSVGElement, Arrows30SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 500 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M83.7705 211.495C71.5205 231.87 49.2712 255.87 28.2712 271.62C4.89621 289.12 28.396 292.87 57.396 289.87C77.146 287.87 101.021 288.245 130.396 291.37C138.646 292.245 139.021 290.12 132.646 280.745C116.771 257.62 116.77 259.87 132.52 258.745C145.895 257.745 172.52 260.37 222.52 267.62C239.145 269.995 292.896 277.245 305.271 278.87C362.521 286.745 423.896 278.495 464.521 257.37C496.271 240.87 478.396 226.87 452.271 239.87C420.646 255.745 379.396 264.37 335.146 264.37C318.396 264.37 303.521 262.62 221.396 251.245C135.271 239.245 134.77 240.62 111.271 242.12C109.146 237.745 100.646 219.495 99.1465 215.745C96.1465 207.87 87.3955 205.495 83.7705 211.495Z" fill="currentColor"/>
    </svg>
  )
);

Arrows30Sketch.displayName = "Arrows30Sketch";

export const Arrows30SketchMetadata = {
  id: "arrows30_sketch",
  baseId: "arrows30",
  variant: "sketch",
  name: "Arrows30",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows30Sketch;
