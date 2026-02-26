/**
 * Auto-generated logo component: Geometric17 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric17ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric17Shapes = React.forwardRef<SVGSVGElement, Geometric17ShapesProps>(
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
      <path d="M51.0768 203.316V0.6875C268.725 0.6875 310.856 237.795 304.716 356.349C304.716 222.587 135.623 198.592 51.0768 203.316Z" fill="#43A363"/>
    </svg>
  )
);

Geometric17Shapes.displayName = "Geometric17Shapes";

export const Geometric17ShapesMetadata = {
  id: "geometric17_shapes",
  baseId: "geometric17",
  variant: "shapes",
  name: "Geometric17",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric17Shapes;
