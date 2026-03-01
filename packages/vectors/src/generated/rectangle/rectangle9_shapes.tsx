
'use client';
import React from 'react';

export interface Rectangle9ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Rectangle9Shapes = React.forwardRef<SVGSVGElement, Rectangle9ShapesProps>(
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
      <path d="M12 16.7613L4.76133 24L0 19.2387L7.23867 12L6.88028e-07 4.76133L4.76133 0L12 7.23867L19.2387 0L24 4.76133L16.7613 12L24 19.2387L19.2387 24L12 16.7613Z" fill="currentColor"/>
    </svg>
  )
);

Rectangle9Shapes.displayName = "Rectangle9Shapes";

export const Rectangle9ShapesMetadata = {
  id: "rectangle9_shapes",
  baseId: "rectangle9",
  variant: "shapes",
  name: "Rectangle9",
  category: "rectangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rectangle9Shapes;
