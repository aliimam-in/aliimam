
'use client';
import React from 'react';

export interface Moon13ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Moon13Shapes = React.forwardRef<SVGSVGElement, Moon13ShapesProps>(
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
      <path d="M0 0C-2.89694e-07 6.62742 5.37258 12 12 12C5.37258 12 0 17.3726 0 24C6.62742 24 12 18.6274 12 12C12 18.6274 17.3726 24 24 24C24 17.3735 18.629 12.0016 12.0029 12C18.629 11.9984 24 6.62645 24 5.24537e-07C17.3726 5.24537e-07 12 5.37258 12 12C12 5.37258 6.62742 2.89694e-07 0 0Z" fill="currentColor"/>
    </svg>
  )
);

Moon13Shapes.displayName = "Moon13Shapes";

export const Moon13ShapesMetadata = {
  id: "moon13_shapes",
  baseId: "moon13",
  variant: "shapes",
  name: "Moon13",
  category: "moon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Moon13Shapes;
