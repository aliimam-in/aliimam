
'use client';
import React from 'react';

export interface Geometric15ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric15Shapes = React.forwardRef<SVGSVGElement, Geometric15ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 357"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M0 149.818L178.175 5.93896L356.35 149.818V356.349H271.712V295.155C271.712 243.495 229.834 201.617 178.175 201.617C126.515 201.617 84.6374 243.495 84.6374 295.155V356.349H0V149.818Z" fill="#F4ADB3"/>
    </svg>
  )
);

Geometric15Shapes.displayName = "Geometric15Shapes";

export const Geometric15ShapesMetadata = {
  id: "geometric15_shapes",
  baseId: "geometric15",
  variant: "shapes",
  name: "Geometric15",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric15Shapes;
