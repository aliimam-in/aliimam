
'use client';
import React from 'react';

export interface Rectangle8ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Rectangle8Shapes = React.forwardRef<SVGSVGElement, Rectangle8ShapesProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M18 6H6V18H18V6ZM0 0V24H24V0H0Z" fill="currentColor"/>
    </svg>
  )
);

Rectangle8Shapes.displayName = "Rectangle8Shapes";

export const Rectangle8ShapesMetadata = {
  id: "rectangle8_shapes",
  baseId: "rectangle8",
  variant: "shapes",
  name: "Rectangle8",
  category: "rectangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rectangle8Shapes;
