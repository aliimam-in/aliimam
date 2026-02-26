/**
 * Auto-generated logo component: Geometric45 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric45ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric45Shapes = React.forwardRef<SVGSVGElement, Geometric45ShapesProps>(
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
      <path d="M178.175 181.144C178.175 91.9253 105.849 19.5991 16.6296 19.5991V181.144C16.6296 270.363 88.9558 342.689 178.175 342.689C267.394 342.689 339.72 270.363 339.72 181.144V19.5991C250.501 19.5991 178.175 91.9253 178.175 181.144Z" fill="#F5BD33"/>
    </svg>
  )
);

Geometric45Shapes.displayName = "Geometric45Shapes";

export const Geometric45ShapesMetadata = {
  id: "geometric45_shapes",
  baseId: "geometric45",
  variant: "shapes",
  name: "Geometric45",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric45Shapes;
