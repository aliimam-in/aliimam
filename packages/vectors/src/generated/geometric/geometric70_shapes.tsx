
'use client';
import React from 'react';

export interface Geometric70ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric70Shapes = React.forwardRef<SVGSVGElement, Geometric70ShapesProps>(
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
      <path d="M35.635 178.175C114.686 178.175 178.769 98.4032 178.769 0C178.769 98.4032 242.852 178.175 321.902 178.175C242.852 178.175 178.769 257.946 178.769 356.35C178.769 257.946 114.686 178.175 35.635 178.175Z" fill="#E55733"/>
    </svg>
  )
);

Geometric70Shapes.displayName = "Geometric70Shapes";

export const Geometric70ShapesMetadata = {
  id: "geometric70_shapes",
  baseId: "geometric70",
  variant: "shapes",
  name: "Geometric70",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric70Shapes;
