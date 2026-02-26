
'use client';
import React from 'react';

export interface Geometric12ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric12Shapes = React.forwardRef<SVGSVGElement, Geometric12ShapesProps>(
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
      <path d="M5.41852 11.8786V171.715C5.41852 267.126 82.764 344.471 178.174 344.471C273.585 344.471 350.93 267.126 350.93 171.715V11.8784C316.979 72.2118 252.336 112.965 178.174 112.965C104.013 112.965 39.3701 72.2119 5.41852 11.8786Z" fill="currentColor"/>
    </svg>
  )
);

Geometric12Shapes.displayName = "Geometric12Shapes";

export const Geometric12ShapesMetadata = {
  id: "geometric12_shapes",
  baseId: "geometric12",
  variant: "shapes",
  name: "Geometric12",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric12Shapes;
