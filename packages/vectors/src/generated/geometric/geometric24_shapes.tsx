/**
 * Auto-generated logo component: Geometric24 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric24ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric24Shapes = React.forwardRef<SVGSVGElement, Geometric24ShapesProps>(
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
      <path d="M178.175 0C79.7716 0 0 79.7716 0 178.175L178.175 356.35L356.35 178.175C356.35 79.7716 276.578 0 178.175 0Z" fill="#E55733"/>
    </svg>
  )
);

Geometric24Shapes.displayName = "Geometric24Shapes";

export const Geometric24ShapesMetadata = {
  id: "geometric24_shapes",
  baseId: "geometric24",
  variant: "shapes",
  name: "Geometric24",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric24Shapes;
