
'use client';
import React from 'react';

export interface Geometric6ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric6Shapes = React.forwardRef<SVGSVGElement, Geometric6ShapesProps>(
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
      <path d="M356.35 0C159.543 0 0 159.543 0 356.35H356.35V0Z" fill="#F5BD33"/>
    </svg>
  )
);

Geometric6Shapes.displayName = "Geometric6Shapes";

export const Geometric6ShapesMetadata = {
  id: "geometric6_shapes",
  baseId: "geometric6",
  variant: "shapes",
  name: "Geometric6",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric6Shapes;
