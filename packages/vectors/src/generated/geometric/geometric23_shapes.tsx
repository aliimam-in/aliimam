
'use client';
import React from 'react';

export interface Geometric23ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric23Shapes = React.forwardRef<SVGSVGElement, Geometric23ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 713 357"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M3.56346 175.799C3.56346 89.4252 73.5834 19.4053 159.957 19.4053H552.742C639.116 19.4053 709.135 89.4252 709.135 175.799C709.135 262.173 639.116 332.193 552.742 332.193H159.957C73.5834 332.193 3.56346 262.173 3.56346 175.799ZM159.957 114.432C126.065 114.432 98.59 141.907 98.59 175.799C98.59 209.691 126.065 237.166 159.957 237.166H552.742C586.634 237.166 614.109 209.691 614.109 175.799C614.109 141.907 586.634 114.432 552.742 114.432H159.957Z" fill="currentColor"/>
    </svg>
  )
);

Geometric23Shapes.displayName = "Geometric23Shapes";

export const Geometric23ShapesMetadata = {
  id: "geometric23_shapes",
  baseId: "geometric23",
  variant: "shapes",
  name: "Geometric23",
  category: "geometric",
  tags: [],
  viewBox: "0 0 713 357",
} as const;

export default Geometric23Shapes;
