
'use client';
import React from 'react';

export interface Geometric73ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric73Shapes = React.forwardRef<SVGSVGElement, Geometric73ShapesProps>(
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
      <path d="M313.588 178.175L178.175 0L42.762 178.175L178.175 356.35L313.588 178.175Z" fill="currentColor"/>
    </svg>
  )
);

Geometric73Shapes.displayName = "Geometric73Shapes";

export const Geometric73ShapesMetadata = {
  id: "geometric73_shapes",
  baseId: "geometric73",
  variant: "shapes",
  name: "Geometric73",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric73Shapes;
