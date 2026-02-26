
'use client';
import React from 'react';

export interface Geometric43ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric43Shapes = React.forwardRef<SVGSVGElement, Geometric43ShapesProps>(
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
      <path d="M1.73938e-06 177.581C2.2807e-06 267.114 178.175 177.581 178.175 177.581C178.175 177.581 1.19806e-06 88.0481 1.73938e-06 177.581Z" fill="currentColor"/>
<path d="M356.35 177.581C356.35 267.114 178.175 177.581 178.175 177.581C178.175 177.581 356.35 88.0481 356.35 177.581Z" fill="currentColor"/>
<path d="M89.0875 331.885C166.625 376.651 178.175 177.581 178.175 177.581C178.175 177.581 11.5498 287.119 89.0875 331.885Z" fill="currentColor"/>
<path d="M267.262 23.277C344.8 68.0435 178.175 177.581 178.175 177.581C178.175 177.581 189.725 -21.4894 267.262 23.277Z" fill="currentColor"/>
<path d="M267.262 331.885C189.724 376.651 178.175 177.581 178.175 177.581C178.175 177.581 344.8 287.119 267.262 331.885Z" fill="currentColor"/>
<path d="M89.0873 23.277C11.5496 68.0435 178.175 177.581 178.175 177.581C178.175 177.581 166.625 -21.4894 89.0873 23.277Z" fill="currentColor"/>
    </svg>
  )
);

Geometric43Shapes.displayName = "Geometric43Shapes";

export const Geometric43ShapesMetadata = {
  id: "geometric43_shapes",
  baseId: "geometric43",
  variant: "shapes",
  name: "Geometric43",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric43Shapes;
