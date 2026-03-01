
'use client';
import React from 'react';

export interface Rectangle6ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Rectangle6Shapes = React.forwardRef<SVGSVGElement, Rectangle6ShapesProps>(
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
      <path d="M18 5.24537e-07V6L6 6L6 0L18 5.24537e-07Z" fill="currentColor"/>
<path d="M6 18L6 6L0 6V18H6Z" fill="currentColor"/>
<path d="M18 18V6H24V18H18Z" fill="currentColor"/>
<path d="M18 18H6L6 24H18V18Z" fill="currentColor"/>
    </svg>
  )
);

Rectangle6Shapes.displayName = "Rectangle6Shapes";

export const Rectangle6ShapesMetadata = {
  id: "rectangle6_shapes",
  baseId: "rectangle6",
  variant: "shapes",
  name: "Rectangle6",
  category: "rectangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rectangle6Shapes;
