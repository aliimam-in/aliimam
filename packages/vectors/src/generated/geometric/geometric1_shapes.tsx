
'use client';
import React from 'react';

export interface Geometric1ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric1Shapes = React.forwardRef<SVGSVGElement, Geometric1ShapesProps>(
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
      <path d="M46.9193 137.744C46.9193 61.6703 178.175 0 178.175 0C178.175 0 309.43 61.6702 309.43 137.744V356.35H46.9193V137.744Z" fill="currentColor"/>
    </svg>
  )
);

Geometric1Shapes.displayName = "Geometric1Shapes";

export const Geometric1ShapesMetadata = {
  id: "geometric1_shapes",
  baseId: "geometric1",
  variant: "shapes",
  name: "Geometric1",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric1Shapes;
