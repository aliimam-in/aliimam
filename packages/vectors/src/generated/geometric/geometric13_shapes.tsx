/**
 * Auto-generated logo component: Geometric13 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric13ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric13Shapes = React.forwardRef<SVGSVGElement, Geometric13ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 357 713"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M263.716 99.4812H91.5161L5.41602 356.35L91.5161 613.218H263.716L349.816 356.35L263.716 99.4812Z" fill="#43A363"/>
    </svg>
  )
);

Geometric13Shapes.displayName = "Geometric13Shapes";

export const Geometric13ShapesMetadata = {
  id: "geometric13_shapes",
  baseId: "geometric13",
  variant: "shapes",
  name: "Geometric13",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 713",
} as const;

export default Geometric13Shapes;
