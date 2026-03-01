
'use client';
import React from 'react';

export interface Polygon4ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Polygon4Shapes = React.forwardRef<SVGSVGElement, Polygon4ShapesProps>(
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
      <g clipPath="url(#clip0_2068_489)">
<path d="M16.9564 0L23.99 7.01946L24 16.9564L16.9805 23.99L7.04355 24L0.00997986 16.9805L0 7.04355L7.01946 0.00997986L16.9564 0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_489">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Polygon4Shapes.displayName = "Polygon4Shapes";

export const Polygon4ShapesMetadata = {
  id: "polygon4_shapes",
  baseId: "polygon4",
  variant: "shapes",
  name: "Polygon4",
  category: "polygon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Polygon4Shapes;
