/**
 * Auto-generated logo component: Geometric75 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric75ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric75Shapes = React.forwardRef<SVGSVGElement, Geometric75ShapesProps>(
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
      <path d="M235.333 234.003H121.016V270.352C121.016 280.159 114.99 288.958 105.847 292.503L86.019 300.189C40.3004 317.913 10.1708 361.908 10.1708 410.941V712.699H346.179V410.941C346.179 361.908 316.049 317.913 270.33 300.189L250.503 292.503C241.359 288.958 235.333 280.159 235.333 270.352V234.003Z" fill="#336BB7"/>
    </svg>
  )
);

Geometric75Shapes.displayName = "Geometric75Shapes";

export const Geometric75ShapesMetadata = {
  id: "geometric75_shapes",
  baseId: "geometric75",
  variant: "shapes",
  name: "Geometric75",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 713",
} as const;

export default Geometric75Shapes;
