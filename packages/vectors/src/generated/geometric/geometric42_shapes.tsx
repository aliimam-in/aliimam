
'use client';
import React from 'react';

export interface Geometric42ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric42Shapes = React.forwardRef<SVGSVGElement, Geometric42ShapesProps>(
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
      <path d="M178.175 354.568C150.492 354.568 127.724 333.523 124.996 306.559C104.001 323.697 73.021 322.478 53.4461 302.903C33.8711 283.328 32.6525 252.348 49.7902 231.353C22.8263 228.626 1.78174 205.858 1.78174 178.175C1.78174 150.492 22.8263 127.724 49.7903 124.996C32.6525 104.001 33.8712 73.021 53.4461 53.446C73.0211 33.8711 104.001 32.6525 124.996 49.7902C127.724 22.8263 150.492 1.78174 178.175 1.78174C205.858 1.78174 228.626 22.8263 231.353 49.7902C252.348 32.6524 283.328 33.8711 302.903 53.446C322.478 73.021 323.697 104.001 306.559 124.996C333.523 127.724 354.568 150.492 354.568 178.175C354.568 205.858 333.523 228.626 306.559 231.353C323.697 252.348 322.478 283.328 302.903 302.903C283.328 322.478 252.348 323.697 231.353 306.559C228.626 333.523 205.858 354.568 178.175 354.568Z" fill="#F5BD33"/>
    </svg>
  )
);

Geometric42Shapes.displayName = "Geometric42Shapes";

export const Geometric42ShapesMetadata = {
  id: "geometric42_shapes",
  baseId: "geometric42",
  variant: "shapes",
  name: "Geometric42",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric42Shapes;
