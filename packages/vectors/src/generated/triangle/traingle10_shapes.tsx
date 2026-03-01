
'use client';
import React from 'react';

export interface Traingle10ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Traingle10Shapes = React.forwardRef<SVGSVGElement, Traingle10ShapesProps>(
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
      <g clipPath="url(#clip0_2068_221)">
<path d="M12 24L24 0H0L12 24Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_221">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Traingle10Shapes.displayName = "Traingle10Shapes";

export const Traingle10ShapesMetadata = {
  id: "traingle10_shapes",
  baseId: "traingle10",
  variant: "shapes",
  name: "Traingle10",
  category: "triangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Traingle10Shapes;
