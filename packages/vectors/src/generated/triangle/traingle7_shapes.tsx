
'use client';
import React from 'react';

export interface Traingle7ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Traingle7Shapes = React.forwardRef<SVGSVGElement, Traingle7ShapesProps>(
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
      <g clipPath="url(#clip0_2068_223)">
<path d="M-0.000373094 0L12.0002 12.0002L-0.000427246 24.0004H24.0009L12.0002 12.0002L24.0009 2.09819e-06L-0.000373094 0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_223">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Traingle7Shapes.displayName = "Traingle7Shapes";

export const Traingle7ShapesMetadata = {
  id: "traingle7_shapes",
  baseId: "traingle7",
  variant: "shapes",
  name: "Traingle7",
  category: "triangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Traingle7Shapes;
