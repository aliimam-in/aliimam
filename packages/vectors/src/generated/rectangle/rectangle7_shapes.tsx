
'use client';
import React from 'react';

export interface Rectangle7ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Rectangle7Shapes = React.forwardRef<SVGSVGElement, Rectangle7ShapesProps>(
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
      <path d="M15.36 3.36L12 0L8.64 3.36L12 6.72L15.36 3.36Z" fill="currentColor"/>
<path d="M6.72 12L3.36 8.64L0 12L3.36 15.36L6.72 12Z" fill="currentColor"/>
<path d="M15.36 12L19.68 16.32L16.32 19.68L12 15.36L7.68 19.68L4.32 16.32L8.64 12L4.32 7.68L7.68 4.32L12 8.64L16.32 4.32L19.68 7.68L15.36 12Z" fill="currentColor"/>
<path d="M20.64 8.64L24 12L20.64 15.36L17.28 12L20.64 8.64Z" fill="currentColor"/>
<path d="M15.36 20.64L12 17.28L8.64 20.64L12 24L15.36 20.64Z" fill="currentColor"/>
    </svg>
  )
);

Rectangle7Shapes.displayName = "Rectangle7Shapes";

export const Rectangle7ShapesMetadata = {
  id: "rectangle7_shapes",
  baseId: "rectangle7",
  variant: "shapes",
  name: "Rectangle7",
  category: "rectangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rectangle7Shapes;
