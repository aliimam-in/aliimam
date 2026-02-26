
'use client';
import React from 'react';

export interface Geometric55ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric55Shapes = React.forwardRef<SVGSVGElement, Geometric55ShapesProps>(
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
      <path d="M174.796 351.074L18.7805 261.585L19.2888 91.0608L174.796 1.28027L330.811 91.0608V261.585L174.796 351.074Z" fill="currentColor"/>
    </svg>
  )
);

Geometric55Shapes.displayName = "Geometric55Shapes";

export const Geometric55ShapesMetadata = {
  id: "geometric55_shapes",
  baseId: "geometric55",
  variant: "shapes",
  name: "Geometric55",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric55Shapes;
