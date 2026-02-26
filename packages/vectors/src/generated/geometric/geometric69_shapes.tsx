/**
 * Auto-generated logo component: Geometric69 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric69ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric69Shapes = React.forwardRef<SVGSVGElement, Geometric69ShapesProps>(
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
      <path d="M274.505 276.262L356.349 273.218L264.425 177.452L356.35 81.6857L274.509 78.6382L265.227 0L179.66 89.1437L94.0922 0L84.8099 78.6382L2.96948 81.6857L94.8939 177.452L2.96955 273.218L84.8141 276.262L94.0923 354.904L179.66 265.761L265.227 354.904L274.505 276.262Z" fill="#F5BD33"/>
    </svg>
  )
);

Geometric69Shapes.displayName = "Geometric69Shapes";

export const Geometric69ShapesMetadata = {
  id: "geometric69_shapes",
  baseId: "geometric69",
  variant: "shapes",
  name: "Geometric69",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric69Shapes;
