/**
 * Auto-generated logo component: Geometric53 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric53ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric53Shapes = React.forwardRef<SVGSVGElement, Geometric53ShapesProps>(
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
      <path d="M4.57764e-05 356.35C98.4032 356.35 178.175 276.578 178.175 178.175H4.57764e-05V356.35Z" fill="#336BB7"/>
<path d="M178.175 178.175C178.175 79.7716 257.946 3.48693e-06 356.35 7.78827e-06L356.35 178.175L178.175 178.175Z" fill="#336BB7"/>
<path d="M178.175 178.175C79.7716 178.175 1.39477e-05 98.4032 3.11531e-05 4.57764e-05L178.175 7.69294e-05L178.175 178.175Z" fill="#336BB7"/>
<path d="M356.349 356.35C356.349 257.946 276.578 178.175 178.175 178.175L178.175 356.35L356.349 356.35Z" fill="#336BB7"/>
    </svg>
  )
);

Geometric53Shapes.displayName = "Geometric53Shapes";

export const Geometric53ShapesMetadata = {
  id: "geometric53_shapes",
  baseId: "geometric53",
  variant: "shapes",
  name: "Geometric53",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric53Shapes;
