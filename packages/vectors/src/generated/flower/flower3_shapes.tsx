
'use client';
import React from 'react';

export interface Flower3ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Flower3Shapes = React.forwardRef<SVGSVGElement, Flower3ShapesProps>(
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
      <g clipPath="url(#clip0_2068_584)">
<path d="M24 6C24 2.68629 21.3137 -1.44847e-07 18 0C14.6863 1.44847e-07 12 2.68629 12 6C12 2.68629 9.31371 3.7969e-07 6 5.24537e-07C2.68629 7.86805e-07 -2.62268e-07 2.68629 0 6C1.44847e-07 9.31371 2.68629 12 6 12C2.68629 12 3.7969e-07 14.6863 5.24537e-07 18C6.69384e-07 21.3137 2.68629 24 6 24C9.31371 24 12 21.3137 12 18C12 21.3137 14.6863 24 18 24C21.3137 24 24 21.3137 24 18C24 14.6871 21.315 12.0013 18.0024 12C21.315 11.9987 24 9.31292 24 6Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_584">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Flower3Shapes.displayName = "Flower3Shapes";

export const Flower3ShapesMetadata = {
  id: "flower3_shapes",
  baseId: "flower3",
  variant: "shapes",
  name: "Flower3",
  category: "flower",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flower3Shapes;
