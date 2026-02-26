
'use client';
import React from 'react';

export interface Geometric61ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric61Shapes = React.forwardRef<SVGSVGElement, Geometric61ShapesProps>(
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
      <path d="M115.814 5.93896H5.93912V350.41H350.41V243.505H115.814V5.93896Z" fill="currentColor"/>
    </svg>
  )
);

Geometric61Shapes.displayName = "Geometric61Shapes";

export const Geometric61ShapesMetadata = {
  id: "geometric61_shapes",
  baseId: "geometric61",
  variant: "shapes",
  name: "Geometric61",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric61Shapes;
