
'use client';
import React from 'react';

export interface Geometric60ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric60Shapes = React.forwardRef<SVGSVGElement, Geometric60ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 357 357"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M356.199 170.787C346.613 172.519 336.739 173.423 326.654 173.423C235.467 173.423 161.545 99.5017 161.545 8.31469C161.545 5.77937 161.602 3.2574 161.715 0.75C71.0279 9.05646 0 85.3208 0 178.175C0 276.578 79.7716 356.349 178.175 356.349C276.578 356.349 356.35 276.578 356.35 178.175C356.35 175.7 356.299 173.237 356.199 170.787Z" fill="currentColor"/>
    </svg>
  )
);

Geometric60Shapes.displayName = "Geometric60Shapes";

export const Geometric60ShapesMetadata = {
  id: "geometric60_shapes",
  baseId: "geometric60",
  variant: "shapes",
  name: "Geometric60",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric60Shapes;
