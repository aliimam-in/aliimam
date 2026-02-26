
'use client';
import React from 'react';

export interface Organic41ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Organic41Shapes = React.forwardRef<SVGSVGElement, Organic41ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 300 600"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M94.8203 78.5491C92.2171 81.2722 81.1767 93.9364 79.6269 110.239C78.6014 121.026 79.9885 131.924 80.9286 142.718C81.6073 150.508 87.7389 183.113 85.9048 194.348C79.9606 230.789 49.6001 259.65 49.886 298.006C50.1112 328.053 75.7403 348.898 84.8563 375.932C95.8787 408.624 85.4118 443.654 93.2525 476.695C97.8492 496.066 113.516 505.865 124.405 521.056C137.792 539.733 132.921 541.439 136.363 565.055C137.285 571.384 136.093 580.505 141.761 583.464C149.709 587.612 158.062 575.893 165.676 571.16C186.461 558.241 198.814 533.766 209.514 513.121C220.361 492.195 231.337 464.749 239.149 442.058C242.633 431.94 250.128 411.512 249.998 398.544C249.786 377.748 236.466 359.192 230.752 339.195C223.633 314.282 236.57 288.829 228.654 263.622C222.162 242.953 200.99 230.996 195.066 210.091C188.807 188.014 197.01 162.828 185.619 141.867C180.384 132.232 174.234 123.146 167.901 114.17L162.343 106.352C154.998 96.0463 147.69 85.7165 141.534 74.692C130.233 54.45 135.263 31.8612 114.246 16.962C104.135 9.7967 106.6 29.945 106.763 31.3337C107.726 39.559 108.737 45.546 108.436 53.8222C108.29 57.8486 95.877 77.4447 94.8203 78.5491Z" fill="currentColor"/>
    </svg>
  )
);

Organic41Shapes.displayName = "Organic41Shapes";

export const Organic41ShapesMetadata = {
  id: "organic41_shapes",
  baseId: "organic41",
  variant: "shapes",
  name: "Organic41",
  category: "organic",
  tags: [],
  viewBox: "0 0 300 600",
} as const;

export default Organic41Shapes;
