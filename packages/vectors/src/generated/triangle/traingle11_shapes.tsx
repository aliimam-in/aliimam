
'use client';
import React from 'react';

export interface Traingle11ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Traingle11Shapes = React.forwardRef<SVGSVGElement, Traingle11ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M12 12L6.08462e-07 5.04L0 18.96L12 12ZM12 12L18.96 0H5.04L12 12ZM12 12L24 5.04V18.96L12 12ZM12 12L18.96 24H5.04L12 12Z" fill="currentColor"/>
    </svg>
  )
);

Traingle11Shapes.displayName = "Traingle11Shapes";

export const Traingle11ShapesMetadata = {
  id: "traingle11_shapes",
  baseId: "traingle11",
  variant: "shapes",
  name: "Traingle11",
  category: "triangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Traingle11Shapes;
