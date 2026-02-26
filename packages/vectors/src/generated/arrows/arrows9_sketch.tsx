
'use client';
import React from 'react';

export interface Arrows9SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows9Sketch = React.forwardRef<SVGSVGElement, Arrows9SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M95.8002 96.0335C81.5502 109.284 86.7997 199.034 102.8 216.034C124.3 239.034 138.55 216.034 131.8 169.034C129.55 154.284 127.049 133.035 126.299 122.035C123.549 90.0345 112.55 80.5335 95.8002 96.0335ZM242.8 221.534C212.8 232.034 254.8 276.033 314.05 296.033L334.05 302.785C269.3 307.535 220.3 310.535 220.3 322.035C220.3 330.035 232.3 331.283 272.8 328.533C334.55 324.283 331.3 322.785 308.55 343.035C269.55 377.535 251.8 400.033 258.05 407.283C264.8 415.283 294.55 410.033 294.05 401.033C293.55 392.783 375.55 323.035 397.3 313.285C423.3 301.535 420.8 299.035 370.05 285.035C326.05 272.785 301.05 259.785 280.55 238.285C262.8 219.785 256.3 217.034 242.8 221.534ZM119.55 254.285C98.5502 270.285 142.55 335.785 174.3 335.785C198.3 335.785 200.05 328.033 181.55 307.283C174.8 299.783 164.05 284.285 157.8 272.785C146.8 253.285 132.55 244.534 119.55 254.285Z" />
    </svg>
  )
);

Arrows9Sketch.displayName = "Arrows9Sketch";

export const Arrows9SketchMetadata = {
  id: "arrows9_sketch",
  baseId: "arrows9",
  variant: "sketch",
  name: "Arrows9",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows9Sketch;
