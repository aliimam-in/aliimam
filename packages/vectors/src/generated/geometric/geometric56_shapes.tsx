/**
 * Auto-generated logo component: Geometric56 (shapes)
 * Category: geometric
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Geometric56ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric56Shapes = React.forwardRef<SVGSVGElement, Geometric56ShapesProps>(
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
      <path d="M178.86 56.6736C137.273 56.6736 103.56 92.0438 103.56 135.675V166.209H80.3711C36.7398 166.209 1.36963 199.922 1.36963 241.509C1.36963 283.096 36.7398 316.809 80.3711 316.809C80.3711 316.809 145.097 312.057 145.097 385.703C145.097 482.385 98.9222 551.869 166.89 559.469C174.658 560.337 179.136 560.33 186.905 559.469C255.086 551.91 212.622 482.385 212.622 385.703C212.622 312.057 277.348 316.809 277.348 316.809C320.979 316.809 356.349 283.096 356.349 241.509C356.349 199.922 320.979 166.209 277.348 166.209H254.159V135.675C254.159 92.0438 220.446 56.6736 178.86 56.6736Z" fill="#E55733"/>
    </svg>
  )
);

Geometric56Shapes.displayName = "Geometric56Shapes";

export const Geometric56ShapesMetadata = {
  id: "geometric56_shapes",
  baseId: "geometric56",
  variant: "shapes",
  name: "Geometric56",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 713",
} as const;

export default Geometric56Shapes;
