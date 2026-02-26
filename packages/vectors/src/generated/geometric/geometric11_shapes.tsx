
'use client';
import React from 'react';

export interface Geometric11ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric11Shapes = React.forwardRef<SVGSVGElement, Geometric11ShapesProps>(
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
      <path d="M181.237 249.802C84.5247 249.802 6.12402 162.577 6.12402 162.577C6.12402 162.577 84.5247 75.3525 181.237 75.3525C277.949 75.3525 356.35 162.577 356.35 162.577C356.35 162.577 277.949 249.802 181.237 249.802Z" fill="currentColor"/>
    </svg>
  )
);

Geometric11Shapes.displayName = "Geometric11Shapes";

export const Geometric11ShapesMetadata = {
  id: "geometric11_shapes",
  baseId: "geometric11",
  variant: "shapes",
  name: "Geometric11",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric11Shapes;
