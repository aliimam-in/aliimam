/**
 * Auto-generated logo component: Geometric65 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric65ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric65Shapes = React.forwardRef<SVGSVGElement, Geometric65ShapesProps>(
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
      <path d="M356.35 0H237.566V118.783H118.783V237.566H0V356.35H356.35V0Z" fill="#E55733"/>
    </svg>
  )
);

Geometric65Shapes.displayName = "Geometric65Shapes";

export const Geometric65ShapesMetadata = {
  id: "geometric65_shapes",
  baseId: "geometric65",
  variant: "shapes",
  name: "Geometric65",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric65Shapes;
