
'use client';
import React from 'react';

export interface Arrows21SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows21Sketch = React.forwardRef<SVGSVGElement, Arrows21SketchProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 490 490"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M82.0656 97.8576C80.1095 134.535 97.2258 225.249 115.32 261.194C134.637 299.582 156.643 310.097 218.016 310.097H248.337C252.983 343.351 258.362 379.539 258.362 390.053C258.362 412.548 290.149 419.395 298.707 398.856C314.111 361.934 353.72 317.432 388.441 298.115C415.094 283.2 414.36 281.733 374.993 269.996C342.473 260.216 324.134 251.658 298.215 234.053C265.45 212.047 243.445 207.156 240.756 221.582C239.289 228.429 246.867 293.225 246.867 293.225H220.217C159.577 293.225 147.107 273.419 122.9 139.18C118.254 113.506 114.586 97.1241 110.185 88.077C103.094 73.6506 83.2882 73.6506 82.0656 97.8576Z" fill="currentColor"/>
    </svg>
  )
);

Arrows21Sketch.displayName = "Arrows21Sketch";

export const Arrows21SketchMetadata = {
  id: "arrows21_sketch",
  baseId: "arrows21",
  variant: "sketch",
  name: "Arrows21",
  category: "arrows",
  tags: [],
  viewBox: "0 0 490 490",
} as const;

export default Arrows21Sketch;
