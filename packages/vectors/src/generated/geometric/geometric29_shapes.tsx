
'use client';
import React from 'react';

export interface Geometric29ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric29Shapes = React.forwardRef<SVGSVGElement, Geometric29ShapesProps>(
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
      <path d="M250.962 214.728C313.04 188.249 356.35 128.395 356.35 58.7979H2.37573C2.37573 129.094 46.56 189.452 109.641 215.516L32.6289 337.344H328.472L250.962 214.728Z" fill="#2F2965"/>
    </svg>
  )
);

Geometric29Shapes.displayName = "Geometric29Shapes";

export const Geometric29ShapesMetadata = {
  id: "geometric29_shapes",
  baseId: "geometric29",
  variant: "shapes",
  name: "Geometric29",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric29Shapes;
