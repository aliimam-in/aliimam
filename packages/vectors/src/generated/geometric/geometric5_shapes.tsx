/**
 * Auto-generated logo component: Geometric5 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric5ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric5Shapes = React.forwardRef<SVGSVGElement, Geometric5ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 357"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M182.035 352.143C276.386 349.935 352.192 272.759 352.192 177.878C352.192 81.6066 274.149 3.56348 177.878 3.56348C82.9963 3.56348 5.82036 79.3698 3.61208 173.72L3.56348 352.192L182.035 352.143Z" fill="#F5BD33"/>
    </svg>
  )
);

Geometric5Shapes.displayName = "Geometric5Shapes";

export const Geometric5ShapesMetadata = {
  id: "geometric5_shapes",
  baseId: "geometric5",
  variant: "shapes",
  name: "Geometric5",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric5Shapes;
