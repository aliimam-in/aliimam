
'use client';
import React from 'react';

export interface Polygon2ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Polygon2Shapes = React.forwardRef<SVGSVGElement, Polygon2ShapesProps>(
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
      <g clipPath="url(#clip0_2068_493)">
<path d="M24 12L18 0H6L0 12L6 24L18 24L24 12Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_493">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Polygon2Shapes.displayName = "Polygon2Shapes";

export const Polygon2ShapesMetadata = {
  id: "polygon2_shapes",
  baseId: "polygon2",
  variant: "shapes",
  name: "Polygon2",
  category: "polygon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Polygon2Shapes;
