
'use client';
import React from 'react';

export interface Geometric78ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric78Shapes = React.forwardRef<SVGSVGElement, Geometric78ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 357 713"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <path d="M151.56 110.451L117.482 5.26196L245.718 5.262L211.642 110.446L342.095 705.572L21.1049 705.572L151.56 110.451Z" fill="currentColor"/>
    </svg>
  )
);

Geometric78Shapes.displayName = "Geometric78Shapes";

export const Geometric78ShapesMetadata = {
  id: "geometric78_shapes",
  baseId: "geometric78",
  variant: "shapes",
  name: "Geometric78",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 713",
} as const;

export default Geometric78Shapes;
