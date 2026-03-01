
'use client';
import React from 'react';

export interface Flower8ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Flower8Shapes = React.forwardRef<SVGSVGElement, Flower8ShapesProps>(
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
      <g clipPath="url(#clip0_2068_586)">
<path d="M6.99382e-07 4.8C-1.1114e-06 2.14903 5.37258 9.30272e-07 12 1.2779e-06C18.6274 1.62554e-06 24 2.14903 24 4.8C24 6.23363 22.4287 7.52047 19.9375 8.4C22.4287 9.27953 24 10.5664 24 12C24 13.4336 22.4287 14.7205 19.9375 15.6C22.4287 16.4795 24 17.7664 24 19.2C24 21.851 18.6274 24 12 24C5.37258 24 7.82809e-08 21.851 1.74845e-07 19.2C-1.68028e-06 17.7664 1.57126 16.4795 4.06253 15.6C1.57126 14.7205 3.84892e-07 13.4336 4.37114e-07 12C-1.41801e-06 10.5664 1.57126 9.27953 4.06253 8.4C1.57126 7.52047 6.4716e-07 6.23363 6.99382e-07 4.8Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_586">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Flower8Shapes.displayName = "Flower8Shapes";

export const Flower8ShapesMetadata = {
  id: "flower8_shapes",
  baseId: "flower8",
  variant: "shapes",
  name: "Flower8",
  category: "flower",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flower8Shapes;
