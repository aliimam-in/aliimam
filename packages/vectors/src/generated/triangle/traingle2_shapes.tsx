
'use client';
import React from 'react';

export interface Traingle2ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Traingle2Shapes = React.forwardRef<SVGSVGElement, Traingle2ShapesProps>(
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
      <g clipPath="url(#clip0_2068_228)">
<path d="M6.11289 0L0 24L12 24L6.11289 0ZM12 24H24L18.116 0L12 24Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_228">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Traingle2Shapes.displayName = "Traingle2Shapes";

export const Traingle2ShapesMetadata = {
  id: "traingle2_shapes",
  baseId: "traingle2",
  variant: "shapes",
  name: "Traingle2",
  category: "triangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Traingle2Shapes;
