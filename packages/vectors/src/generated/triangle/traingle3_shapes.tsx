
'use client';
import React from 'react';

export interface Traingle3ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Traingle3Shapes = React.forwardRef<SVGSVGElement, Traingle3ShapesProps>(
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
      <g clipPath="url(#clip0_2068_225)">
<path d="M0 0L0 12L11.9981 12L0 0ZM11.9981 12L24 0L11.9981 0L11.9981 12ZM11.9981 12L24 24V12L11.9981 12ZM11.9981 12L0 24L11.9981 24L11.9981 12Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_225">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Traingle3Shapes.displayName = "Traingle3Shapes";

export const Traingle3ShapesMetadata = {
  id: "traingle3_shapes",
  baseId: "traingle3",
  variant: "shapes",
  name: "Traingle3",
  category: "triangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Traingle3Shapes;
