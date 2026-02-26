
'use client';
import React from 'react';

export interface Geometric18ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric18Shapes = React.forwardRef<SVGSVGElement, Geometric18ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 357 357"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M0 356.35H89.0874L0 0V356.35Z" fill="currentColor"/>
<path d="M178.175 356.35H267.262L178.175 0V356.35Z" fill="currentColor"/>
<path d="M89.0874 356.35H178.175L89.0874 0V356.35Z" fill="currentColor"/>
<path d="M267.262 356.35H356.35L267.262 0V356.35Z" fill="currentColor"/>
    </svg>
  )
);

Geometric18Shapes.displayName = "Geometric18Shapes";

export const Geometric18ShapesMetadata = {
  id: "geometric18_shapes",
  baseId: "geometric18",
  variant: "shapes",
  name: "Geometric18",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric18Shapes;
