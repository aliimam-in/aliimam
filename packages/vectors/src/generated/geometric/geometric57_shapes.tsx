
'use client';
import React from 'react';

export interface Geometric57ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric57Shapes = React.forwardRef<SVGSVGElement, Geometric57ShapesProps>(
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
      <path d="M192.416 0C192.416 0 39.1985 60.5794 39.1985 206.089C39.1985 264.886 71.4719 355.834 139.854 355.834C157.375 355.834 187.677 353.38 192.416 281.516C197.155 353.38 227.457 355.834 244.978 355.834C313.36 355.834 345.634 264.886 345.634 206.089C345.634 60.5794 192.416 0 192.416 0Z" fill="#F5BD33"/>
    </svg>
  )
);

Geometric57Shapes.displayName = "Geometric57Shapes";

export const Geometric57ShapesMetadata = {
  id: "geometric57_shapes",
  baseId: "geometric57",
  variant: "shapes",
  name: "Geometric57",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric57Shapes;
