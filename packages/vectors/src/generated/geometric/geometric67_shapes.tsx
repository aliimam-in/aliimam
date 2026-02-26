
'use client';
import React from 'react';

export interface Geometric67ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric67Shapes = React.forwardRef<SVGSVGElement, Geometric67ShapesProps>(
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
      <path d="M246.027 68.3488L178.175 3.3042L110.323 68.3488L6.10352e-05 131.163L51.6712 231.553L67.7483 337.09L178.175 325.014L288.601 337.09L304.678 231.553L356.35 131.163L246.027 68.3488Z" fill="#E55733"/>
    </svg>
  )
);

Geometric67Shapes.displayName = "Geometric67Shapes";

export const Geometric67ShapesMetadata = {
  id: "geometric67_shapes",
  baseId: "geometric67",
  variant: "shapes",
  name: "Geometric67",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric67Shapes;
