
'use client';
import React from 'react';

export interface Polygon8ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Polygon8Shapes = React.forwardRef<SVGSVGElement, Polygon8ShapesProps>(
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
      <g clipPath="url(#clip0_2068_486)">
<path d="M12 0L0 6V18L12 24L24 18V6L12 0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_486">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Polygon8Shapes.displayName = "Polygon8Shapes";

export const Polygon8ShapesMetadata = {
  id: "polygon8_shapes",
  baseId: "polygon8",
  variant: "shapes",
  name: "Polygon8",
  category: "polygon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Polygon8Shapes;
