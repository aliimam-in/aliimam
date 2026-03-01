
'use client';
import React from 'react';

export interface Flower15ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Flower15Shapes = React.forwardRef<SVGSVGElement, Flower15ShapesProps>(
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
      <path d="M23.2177 3.15556C24.83 6.15778 23.8705 9.98998 21.0714 11.7273L20.8887 11.8407C19.0111 13.0061 17.8554 15.1531 17.8554 17.4758V17.7341C17.8554 21.1947 15.234 24 12.0002 24C8.76644 24 6.14495 21.1947 6.14495 17.7341V17.4763C6.14495 15.1534 4.9892 13.0063 3.11154 11.8409L2.92856 11.7273C0.129507 9.99002 -0.830026 6.15781 0.782312 3.15559C2.40372 0.136491 6.00932 -0.897375 8.82411 0.849699L8.96868 0.939431C10.8433 2.10296 13.1567 2.10296 15.0313 0.93943L15.1759 0.849666C17.9907 -0.897407 21.5963 0.136458 23.2177 3.15556Z" fill="currentColor"/>
    </svg>
  )
);

Flower15Shapes.displayName = "Flower15Shapes";

export const Flower15ShapesMetadata = {
  id: "flower15_shapes",
  baseId: "flower15",
  variant: "shapes",
  name: "Flower15",
  category: "flower",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flower15Shapes;
