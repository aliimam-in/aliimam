
'use client';
import React from 'react';

export interface Geometric54ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric54Shapes = React.forwardRef<SVGSVGElement, Geometric54ShapesProps>(
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
      <path d="M141.973 85.5467C106.123 54.7088 52.0555 58.7967 21.2492 94.6744C-9.51897 130.507 -5.43725 184.493 30.3688 215.293L176.233 340.762L177.378 342.095L177.581 341.921L177.783 342.095L178.928 340.762L324.793 215.293C360.599 184.493 364.681 130.507 333.912 94.6744C303.106 58.7967 249.039 54.7088 213.188 85.5467L177.581 116.175L141.973 85.5467Z" fill="currentColor"/>
    </svg>
  )
);

Geometric54Shapes.displayName = "Geometric54Shapes";

export const Geometric54ShapesMetadata = {
  id: "geometric54_shapes",
  baseId: "geometric54",
  variant: "shapes",
  name: "Geometric54",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric54Shapes;
