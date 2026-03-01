
'use client';
import React from 'react';

export interface Rectangle5ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Rectangle5Shapes = React.forwardRef<SVGSVGElement, Rectangle5ShapesProps>(
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
      <path d="M15.6 0H8.4V8.4H3.14722e-07L0 15.6H8.4V24H15.6V15.6H24V8.4H15.6V0Z" fill="currentColor"/>
    </svg>
  )
);

Rectangle5Shapes.displayName = "Rectangle5Shapes";

export const Rectangle5ShapesMetadata = {
  id: "rectangle5_shapes",
  baseId: "rectangle5",
  variant: "shapes",
  name: "Rectangle5",
  category: "rectangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rectangle5Shapes;
