
'use client';
import React from 'react';

export interface Geometric41ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric41Shapes = React.forwardRef<SVGSVGElement, Geometric41ShapesProps>(
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
      <path d="M128.646 46.6937C177.448 95.4425 177.866 177.615 177.866 177.615C177.866 177.615 99.1577 180.75 50.3548 132.001C1.55191 83.2526 1.13472 1.07999 1.13472 1.07999C1.13472 1.07999 79.8427 -2.05517 128.646 46.6937Z" fill="#E55733"/>
<path d="M227.086 46.6937C178.283 95.4425 177.866 177.615 177.866 177.615C177.866 177.615 256.573 180.75 305.376 132.001C354.179 83.2526 354.596 1.07999 354.596 1.07999C354.596 1.07999 275.889 -2.05517 227.086 46.6937Z" fill="#E55733"/>
<path d="M128.646 308.468C177.448 259.719 177.866 177.547 177.866 177.547C177.866 177.547 99.1577 174.411 50.3548 223.16C1.55191 271.909 1.13472 354.082 1.13472 354.082C1.13472 354.082 79.8427 357.217 128.646 308.468Z" fill="#E55733"/>
<path d="M227.086 308.468C178.283 259.719 177.866 177.547 177.866 177.547C177.866 177.547 256.573 174.411 305.376 223.16C354.179 271.909 354.596 354.082 354.596 354.082C354.596 354.082 275.889 357.217 227.086 308.468Z" fill="#E55733"/>
    </svg>
  )
);

Geometric41Shapes.displayName = "Geometric41Shapes";

export const Geometric41ShapesMetadata = {
  id: "geometric41_shapes",
  baseId: "geometric41",
  variant: "shapes",
  name: "Geometric41",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 357",
} as const;

export default Geometric41Shapes;
