
'use client';
import React from 'react';

export interface Arrows17SketchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Arrows17Sketch = React.forwardRef<SVGSVGElement, Arrows17SketchProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M136.076 207.718C130.813 213.902 113.708 226.402 102.787 232.06C90.4189 238.508 69.2346 247.455 66.4714 247.455C63.4451 247.455 57.5239 255.217 86.0765 264.69C106.734 271.533 124.892 279.823 135.55 287.323C150.945 298.244 153.708 294.692 146.866 287.192C141.603 281.402 131.209 273.376 120.024 267.06L112.13 262.587C235.287 258.639 205.55 258.508 400.287 256.534C381.603 268.508 368.05 276.534 368.05 286.008C368.05 298.376 373.84 298.902 390.418 287.981C399.629 281.929 410.419 275.875 420.419 270.612C450.682 254.427 432.261 246.008 407.524 234.56C391.866 227.323 371.208 214.823 363.971 208.376C358.445 203.376 356.208 202.85 356.208 206.665C356.208 213.376 368.313 228.112 380.155 235.743C384.892 238.769 383.182 241.139 375.418 241.271C351.34 241.666 255.682 239.166 112.261 248.639L120.814 243.376C135.945 234.034 146.076 224.296 149.366 216.664C153.313 207.059 143.708 198.902 136.076 207.718Z" />
    </svg>
  )
);

Arrows17Sketch.displayName = "Arrows17Sketch";

export const Arrows17SketchMetadata = {
  id: "arrows17_sketch",
  baseId: "arrows17",
  variant: "sketch",
  name: "Arrows17",
  category: "arrows",
  tags: [],
  viewBox: "0 0 500 500",
} as const;

export default Arrows17Sketch;
