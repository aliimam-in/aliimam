
'use client';
import React from 'react';

export interface Geometric40ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric40Shapes = React.forwardRef<SVGSVGElement, Geometric40ShapesProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M161.287 0H279.807L203.041 101.593H346.847L91.9717 355.528L169.695 184.3H26.7263L161.287 0Z" fill="currentColor"/>
    </svg>
  )
);

Geometric40Shapes.displayName = "Geometric40Shapes";

export const Geometric40ShapesMetadata = {
  id: "geometric40_shapes",
  baseId: "geometric40",
  variant: "shapes",
  name: "Geometric40",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric40Shapes;
