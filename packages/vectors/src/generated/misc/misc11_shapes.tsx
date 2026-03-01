
'use client';
import React from 'react';

export interface Misc11ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Misc11Shapes = React.forwardRef<SVGSVGElement, Misc11ShapesProps>(
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
      <path d="M24 12L12 0V8.4H0V15.6H12V24L24 12Z" fill="currentColor"/>
    </svg>
  )
);

Misc11Shapes.displayName = "Misc11Shapes";

export const Misc11ShapesMetadata = {
  id: "misc11_shapes",
  baseId: "misc11",
  variant: "shapes",
  name: "Misc11",
  category: "misc",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Misc11Shapes;
