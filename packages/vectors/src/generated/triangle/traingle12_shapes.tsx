
'use client';
import React from 'react';

export interface Traingle12ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Traingle12Shapes = React.forwardRef<SVGSVGElement, Traingle12ShapesProps>(
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
      <path d="M0 0L7.97342 24H0V0Z" fill="currentColor"/>
<path d="M8.01329 0L15.9867 24H8.01329V0Z" fill="currentColor"/>
<path d="M24 24L16.0266 0V24H24Z" fill="currentColor"/>
    </svg>
  )
);

Traingle12Shapes.displayName = "Traingle12Shapes";

export const Traingle12ShapesMetadata = {
  id: "traingle12_shapes",
  baseId: "traingle12",
  variant: "shapes",
  name: "Traingle12",
  category: "triangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Traingle12Shapes;
