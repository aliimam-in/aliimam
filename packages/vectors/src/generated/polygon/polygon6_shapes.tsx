
'use client';
import React from 'react';

export interface Polygon6ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Polygon6Shapes = React.forwardRef<SVGSVGElement, Polygon6ShapesProps>(
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
      <g clipPath="url(#clip0_2068_488)">
<path d="M12 0L24 9.16718L19.4164 24H4.58359L0 9.16718L12 0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_488">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Polygon6Shapes.displayName = "Polygon6Shapes";

export const Polygon6ShapesMetadata = {
  id: "polygon6_shapes",
  baseId: "polygon6",
  variant: "shapes",
  name: "Polygon6",
  category: "polygon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Polygon6Shapes;
