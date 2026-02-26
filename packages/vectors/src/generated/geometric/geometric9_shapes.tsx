/**
 * Auto-generated logo component: Geometric9 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric9ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric9Shapes = React.forwardRef<SVGSVGElement, Geometric9ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 713"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M257.759 165.371C257.759 171.766 256.994 177.983 255.549 183.935C289.95 192.241 315.505 223.225 315.505 260.177C315.505 279.078 308.82 296.416 297.685 309.958C331.699 318.536 356.875 349.334 356.875 386.011C356.875 422.161 332.419 452.599 299.149 461.681C310.474 475.278 317.287 492.766 317.287 511.845C317.287 548.798 291.732 579.782 257.331 588.088C258.776 594.04 259.541 600.256 259.541 606.652C259.541 649.968 224.427 685.083 181.11 685.083C180.515 685.083 179.921 685.076 179.329 685.063C178.736 685.076 178.142 685.083 177.547 685.083C134.231 685.083 99.1159 649.968 99.1159 606.652C99.1159 600.256 99.8815 594.039 101.326 588.088C66.9249 579.782 41.3701 548.798 41.3701 511.845C41.3701 492.766 48.1828 475.278 59.5083 461.681C26.2383 452.599 1.78174 422.161 1.78174 386.011C1.78174 349.334 26.9582 318.536 60.9721 309.958C49.8372 296.416 43.1518 279.078 43.1518 260.177C43.1518 223.225 68.7067 192.241 103.108 183.935C101.663 177.983 100.898 171.766 100.898 165.371C100.898 122.054 136.012 86.9397 179.329 86.9397C222.645 86.9397 257.759 122.054 257.759 165.371Z" fill="#E55733"/>
    </svg>
  )
);

Geometric9Shapes.displayName = "Geometric9Shapes";

export const Geometric9ShapesMetadata = {
  id: "geometric9_shapes",
  baseId: "geometric9",
  variant: "shapes",
  name: "Geometric9",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 713",
} as const;

export default Geometric9Shapes;
