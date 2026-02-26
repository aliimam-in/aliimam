/**
 * Auto-generated logo component: Geometric2 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric2ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric2Shapes = React.forwardRef<SVGSVGElement, Geometric2ShapesProps>(
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
      <path d="M46.9194 148.042C46.9194 75.5517 105.684 16.7866 178.175 16.7866C250.665 16.7866 309.43 75.5516 309.43 148.042V356.349H46.9194V148.042Z" fill="#43A363"/>
    </svg>
  )
);

Geometric2Shapes.displayName = "Geometric2Shapes";

export const Geometric2ShapesMetadata = {
  id: "geometric2_shapes",
  baseId: "geometric2",
  variant: "shapes",
  name: "Geometric2",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric2Shapes;
