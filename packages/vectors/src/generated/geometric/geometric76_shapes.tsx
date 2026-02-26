
'use client';
import React from 'react';

export interface Geometric76ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric76Shapes = React.forwardRef<SVGSVGElement, Geometric76ShapesProps>(
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
      <path d="M122.648 53.0204C122.648 53.0204 51.6216 119.851 30.7099 173.476C4.3747 241.009 30.7099 356.349 30.7099 356.349H325.356C325.356 356.349 351.691 241.009 325.356 173.476C304.444 119.851 233.417 53.0202 233.417 53.0202V1.1875H122.648V53.0204Z" fill="currentColor"/>
    </svg>
  )
);

Geometric76Shapes.displayName = "Geometric76Shapes";

export const Geometric76ShapesMetadata = {
  id: "geometric76_shapes",
  baseId: "geometric76",
  variant: "shapes",
  name: "Geometric76",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric76Shapes;
