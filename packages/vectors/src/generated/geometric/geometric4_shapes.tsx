
'use client';
import React from 'react';

export interface Geometric4ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric4Shapes = React.forwardRef<SVGSVGElement, Geometric4ShapesProps>(
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
      <path d="M94.2563 6.29199C46.7922 6.29199 8.31482 44.7694 8.31482 92.2335C8.31482 120.132 21.608 144.925 42.2059 160.626C53.9501 169.577 63.549 182.278 63.549 197.045V343.284H291.613V197.045C291.613 182.278 301.212 169.577 312.956 160.626C333.554 144.925 346.847 120.132 346.847 92.2335C346.847 44.7694 308.37 6.29199 260.905 6.29199H94.2563Z" fill="#336BB7"/>
    </svg>
  )
);

Geometric4Shapes.displayName = "Geometric4Shapes";

export const Geometric4ShapesMetadata = {
  id: "geometric4_shapes",
  baseId: "geometric4",
  variant: "shapes",
  name: "Geometric4",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric4Shapes;
