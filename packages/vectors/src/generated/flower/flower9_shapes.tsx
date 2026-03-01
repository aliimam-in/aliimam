
'use client';
import React from 'react';

export interface Flower9ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Flower9Shapes = React.forwardRef<SVGSVGElement, Flower9ShapesProps>(
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
      <path d="M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C2.68629 12 0 14.6863 0 18C0 21.3137 2.68629 24 6 24H18C21.3137 24 24 21.3137 24 18C24 14.6863 21.3137 12 18 12C21.3137 12 24 9.31371 24 6C24 2.68629 21.3137 0 18 0H6Z" fill="currentColor"/>
    </svg>
  )
);

Flower9Shapes.displayName = "Flower9Shapes";

export const Flower9ShapesMetadata = {
  id: "flower9_shapes",
  baseId: "flower9",
  variant: "shapes",
  name: "Flower9",
  category: "flower",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flower9Shapes;
