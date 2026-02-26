/**
 * Auto-generated logo component: Geometric66 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric66ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric66Shapes = React.forwardRef<SVGSVGElement, Geometric66ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 357"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M98.3848 122.915L0 178.174L98.3848 233.434L153.644 331.819L208.904 233.434L307.289 178.174L208.904 122.915L153.644 24.5303L98.3848 122.915Z" fill="#43A363"/>
    </svg>
  )
);

Geometric66Shapes.displayName = "Geometric66Shapes";

export const Geometric66ShapesMetadata = {
  id: "geometric66_shapes",
  baseId: "geometric66",
  variant: "shapes",
  name: "Geometric66",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric66Shapes;
