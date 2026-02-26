
'use client';
import React from 'react';

export interface Geometric48ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric48Shapes = React.forwardRef<SVGSVGElement, Geometric48ShapesProps>(
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
      <path d="M49.8625 240.034L7.09167 288.643C7.09167 165.463 53.2841 59.3916 178.175 59.3916C303.066 59.3916 349.258 165.463 349.258 288.643L306.487 240.034L263.716 288.643L220.946 240.034L178.175 288.643L135.404 240.034L92.6333 288.643L49.8625 240.034Z" fill="currentColor"/>
    </svg>
  )
);

Geometric48Shapes.displayName = "Geometric48Shapes";

export const Geometric48ShapesMetadata = {
  id: "geometric48_shapes",
  baseId: "geometric48",
  variant: "shapes",
  name: "Geometric48",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric48Shapes;
