
'use client';
import React from 'react';

export interface Traingle6ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Traingle6Shapes = React.forwardRef<SVGSVGElement, Traingle6ShapesProps>(
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
      <g clipPath="url(#clip0_2068_224)">
<path d="M24 5.24537e-07L24 24L4.51452e-07 0L24 5.24537e-07Z" fill="currentColor"/>
<path d="M12 12L12 24L0 12L12 12Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_224">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Traingle6Shapes.displayName = "Traingle6Shapes";

export const Traingle6ShapesMetadata = {
  id: "traingle6_shapes",
  baseId: "traingle6",
  variant: "shapes",
  name: "Traingle6",
  category: "triangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Traingle6Shapes;
