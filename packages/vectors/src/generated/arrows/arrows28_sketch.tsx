
'use client';
import React from 'react';

export interface Arrows28SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows28Sketch = React.forwardRef<SVGSVGElement, Arrows28SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M488.064 198.929C483.619 200.734 442.369 244.555 376.05 255.805C320.703 265.18 226.606 254.971 199.661 253.096C150.911 249.623 101.675 251.498 76.675 257.679C70.5639 259.207 65.2164 260.457 64.7997 260.457C64.0358 260.457 58.3417 244.207 58.2723 241.984C58.2028 239.137 52.5776 236.916 50.0082 238.721C44.9387 242.263 42.1613 254.555 15.703 280.735C3.61966 292.68 -5.40853 299.277 28.8276 296.638C42.7859 295.596 50.4944 296.221 65.425 299.832C76.2583 302.471 78.0639 302.055 76.1194 297.402C74.8694 294.416 67.9945 272.262 67.9945 271.151C67.9945 263.721 150.564 257.262 195.703 261.151C242.3 265.179 340.147 273.999 393.689 262.402C437.022 253.027 492.022 216.29 494.8 205.179C495.842 201.29 491.606 197.471 488.064 198.929Z" />
    </svg>
  )
);

Arrows28Sketch.displayName = "Arrows28Sketch";

export const Arrows28SketchMetadata = {
  id: "arrows28_sketch",
  baseId: "arrows28",
  variant: "sketch",
  name: "Arrows28",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows28Sketch;
