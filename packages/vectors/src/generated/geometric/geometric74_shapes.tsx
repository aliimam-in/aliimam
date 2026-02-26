
'use client';
import React from 'react';

export interface Geometric74ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric74Shapes = React.forwardRef<SVGSVGElement, Geometric74ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 357"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M356.35 178.175L178.175 0.000488281L4.57764e-05 178.175H356.35Z" fill="#43A363"/>
<path d="M356.35 356.35L178.175 178.175L7.62939e-06 356.35H356.35Z" fill="#43A363"/>
    </svg>
  )
);

Geometric74Shapes.displayName = "Geometric74Shapes";

export const Geometric74ShapesMetadata = {
  id: "geometric74_shapes",
  baseId: "geometric74",
  variant: "shapes",
  name: "Geometric74",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric74Shapes;
