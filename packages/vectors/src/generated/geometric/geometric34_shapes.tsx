
'use client';
import React from 'react';

export interface Geometric34ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric34Shapes = React.forwardRef<SVGSVGElement, Geometric34ShapesProps>(
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
      <path d="M290.751 178.175C330.786 159.769 356.35 131.752 356.35 100.372C356.35 44.938 276.578 0 178.175 0C79.7716 0 0 44.938 0 100.372C0 131.752 25.5633 159.769 65.5988 178.175C25.5633 196.58 0 224.597 0 255.978C0 311.412 79.7716 356.35 178.175 356.35C276.578 356.35 356.35 311.412 356.35 255.978C356.35 224.597 330.786 196.58 290.751 178.175Z" fill="#F4ADB3"/>
    </svg>
  )
);

Geometric34Shapes.displayName = "Geometric34Shapes";

export const Geometric34ShapesMetadata = {
  id: "geometric34_shapes",
  baseId: "geometric34",
  variant: "shapes",
  name: "Geometric34",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric34Shapes;
