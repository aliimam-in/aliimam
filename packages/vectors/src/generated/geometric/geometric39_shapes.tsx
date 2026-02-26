
'use client';
import React from 'react';

export interface Geometric39ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric39Shapes = React.forwardRef<SVGSVGElement, Geometric39ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 713"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M356.35 418.401C356.35 533.86 276.578 627.459 178.175 627.459C79.7716 627.459 0 533.86 0 418.401C0 302.941 178.175 79.8687 178.175 79.8687C178.175 79.8687 356.35 302.941 356.35 418.401Z" fill="#F4ADB3"/>
    </svg>
  )
);

Geometric39Shapes.displayName = "Geometric39Shapes";

export const Geometric39ShapesMetadata = {
  id: "geometric39_shapes",
  baseId: "geometric39",
  variant: "shapes",
  name: "Geometric39",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 713",
} as const;

export default Geometric39Shapes;
