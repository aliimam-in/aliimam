
'use client';
import React from 'react';

export interface Geometric20ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric20Shapes = React.forwardRef<SVGSVGElement, Geometric20ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 357 357"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M7.12695 7.12695H182.926C274.769 7.12695 349.222 81.5804 349.222 173.423V349.222H173.423C81.5803 349.222 7.12695 274.769 7.12695 182.926V7.12695Z" fill="currentColor"/>
    </svg>
  )
);

Geometric20Shapes.displayName = "Geometric20Shapes";

export const Geometric20ShapesMetadata = {
  id: "geometric20_shapes",
  baseId: "geometric20",
  variant: "shapes",
  name: "Geometric20",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric20Shapes;
