
'use client';
import React from 'react';

export interface Traingle1ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Traingle1Shapes = React.forwardRef<SVGSVGElement, Traingle1ShapesProps>(
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
      <g clipPath="url(#clip0_2068_230)">
<path d="M-0.0286255 0.00341797L11.9714 12.0006L11.9714 0.00341797L-0.0286255 0.00341797ZM11.9714 0.00341797L23.9714 12.0006L23.9714 0.00341797L11.9714 0.00341797ZM23.9714 12.0006L11.9714 12.0006L23.9714 23.997V12.0006ZM11.9714 12.0006L-0.0286255 12.0006L11.9714 23.997L11.9714 12.0006Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_230">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Traingle1Shapes.displayName = "Traingle1Shapes";

export const Traingle1ShapesMetadata = {
  id: "traingle1_shapes",
  baseId: "traingle1",
  variant: "shapes",
  name: "Traingle1",
  category: "triangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Traingle1Shapes;
