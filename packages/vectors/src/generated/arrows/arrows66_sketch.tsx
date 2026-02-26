
'use client';
import React from 'react';

export interface Arrows66SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows66Sketch = React.forwardRef<SVGSVGElement, Arrows66SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M437.22 45.8531C309.82 57.8531 287.02 66.2527 227.42 73.4527C215.82 74.8527 186.221 76.8531 221.62 99.8531C224.22 101.453 278.62 144.653 278.82 144.853C226.22 189.253 76.2202 306.452 31.8202 350.452C23.8202 358.452 22.8204 372.454 29.0204 379.054C42.6204 394.054 68.0208 419.052 91.4208 439.652C115.621 461.252 126.62 459.654 153.02 431.054C170.02 412.454 249.02 338.854 290.22 303.254C317.82 279.254 348.22 248.454 368.82 228.054L392.62 253.054C430.02 292.454 445.42 299.252 445.42 276.652C445.42 262.052 472.22 100.453 475.02 75.8531C479.22 40.6531 452.42 44.4531 437.22 45.8531ZM447.22 75.8531C447.22 76.0531 420.42 237.254 420.22 237.254C419.82 237.254 389.22 206.254 388.82 205.854C377.62 194.053 358.22 189.053 331.42 221.054C322.22 232.054 279.42 272.454 236.22 311.254C119.221 415.854 124.821 417.054 115.421 426.254C72.0208 384.654 104.021 412.652 49.2206 363.452C49.4206 363.252 291.42 172.453 314.02 152.653C327.82 140.453 318.62 127.653 282.62 109.053C271.82 103.453 263.42 98.4533 263.82 98.0533C264.82 97.0533 447.22 72.6531 447.22 75.8531Z" />
    </svg>
  )
);

Arrows66Sketch.displayName = "Arrows66Sketch";

export const Arrows66SketchMetadata = {
  id: "arrows66_sketch",
  baseId: "arrows66",
  variant: "sketch",
  name: "Arrows66",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows66Sketch;
