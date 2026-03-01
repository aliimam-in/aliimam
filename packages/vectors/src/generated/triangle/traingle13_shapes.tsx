
'use client';
import React from 'react';

export interface Traingle13ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Traingle13Shapes = React.forwardRef<SVGSVGElement, Traingle13ShapesProps>(
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
      <path d="M4.8 12V24L0 12L4.8 0V12Z" fill="currentColor"/>
<path d="M12 0L4.8 12L12 24L19.2 12L12 0Z" fill="currentColor"/>
<path d="M19.2 12V24L24 12L19.2 0V12Z" fill="currentColor"/>
    </svg>
  )
);

Traingle13Shapes.displayName = "Traingle13Shapes";

export const Traingle13ShapesMetadata = {
  id: "traingle13_shapes",
  baseId: "traingle13",
  variant: "shapes",
  name: "Traingle13",
  category: "triangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Traingle13Shapes;
