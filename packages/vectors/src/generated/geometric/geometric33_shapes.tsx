
'use client';
import React from 'react';

export interface Geometric33ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric33Shapes = React.forwardRef<SVGSVGElement, Geometric33ShapesProps>(
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
      <path d="M356.35 157.981C356.35 255.729 277.11 334.968 179.363 334.968C81.6155 334.968 2.37573 255.729 2.37573 157.981H109.724C109.724 196.442 140.902 227.62 179.363 227.62C217.823 227.62 249.001 196.442 249.001 157.981H356.35Z" fill="#336BB7"/>
    </svg>
  )
);

Geometric33Shapes.displayName = "Geometric33Shapes";

export const Geometric33ShapesMetadata = {
  id: "geometric33_shapes",
  baseId: "geometric33",
  variant: "shapes",
  name: "Geometric33",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric33Shapes;
