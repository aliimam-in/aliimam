
'use client';
import React from 'react';

export interface Geometric64ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric64Shapes = React.forwardRef<SVGSVGElement, Geometric64ShapesProps>(
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
      <path d="M4.24854 178.175C4.24854 110.37 4.24854 2.96973 178.175 2.96973C352.101 2.96973 352.101 110.37 352.101 178.175C352.101 245.98 352.101 353.38 178.175 353.38C4.24854 353.38 4.24854 245.98 4.24854 178.175Z" fill="#336BB7"/>
    </svg>
  )
);

Geometric64Shapes.displayName = "Geometric64Shapes";

export const Geometric64ShapesMetadata = {
  id: "geometric64_shapes",
  baseId: "geometric64",
  variant: "shapes",
  name: "Geometric64",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric64Shapes;
