
'use client';
import React from 'react';

export interface Traingle8ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Traingle8Shapes = React.forwardRef<SVGSVGElement, Traingle8ShapesProps>(
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
      <g clipPath="url(#clip0_2068_222)">
<path d="M24.0005 12.0003L12 0L-0.000457764 12.0003H11.9999L-0.000457764 24.0005H24.0005L11.9999 12.0003H24.0005Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_222">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Traingle8Shapes.displayName = "Traingle8Shapes";

export const Traingle8ShapesMetadata = {
  id: "traingle8_shapes",
  baseId: "traingle8",
  variant: "shapes",
  name: "Traingle8",
  category: "triangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Traingle8Shapes;
