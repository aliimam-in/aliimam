/**
 * Auto-generated logo component: Geometric19 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric19ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric19Shapes = React.forwardRef<SVGSVGElement, Geometric19ShapesProps>(
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
      <path fillRule="evenodd" clipRule="evenodd" d="M0 214.153C71.6268 214.153 129.692 156.032 129.692 84.3359H226.658C226.658 156.032 284.723 214.153 356.35 214.153V311.212C284.061 311.212 219.677 277.339 178.175 224.584C136.672 277.339 72.2881 311.212 0 311.212V214.153Z" fill="#E55733"/>
    </svg>
  )
);

Geometric19Shapes.displayName = "Geometric19Shapes";

export const Geometric19ShapesMetadata = {
  id: "geometric19_shapes",
  baseId: "geometric19",
  variant: "shapes",
  name: "Geometric19",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric19Shapes;
