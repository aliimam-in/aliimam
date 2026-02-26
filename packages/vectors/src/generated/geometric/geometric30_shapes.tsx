/**
 * Auto-generated logo component: Geometric30 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric30ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric30Shapes = React.forwardRef<SVGSVGElement, Geometric30ShapesProps>(
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
      <path d="M207.871 102.325V4.15723H148.479V102.325L67.1125 20.9587L25.1163 62.9549L148.479 186.318V355.161H207.871V186.318L331.233 62.9549L289.237 20.9587L207.871 102.325Z" fill="#292524"/>
    </svg>
  )
);

Geometric30Shapes.displayName = "Geometric30Shapes";

export const Geometric30ShapesMetadata = {
  id: "geometric30_shapes",
  baseId: "geometric30",
  variant: "shapes",
  name: "Geometric30",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric30Shapes;
