
'use client';
import React from 'react';

export interface Geometric27ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric27Shapes = React.forwardRef<SVGSVGElement, Geometric27ShapesProps>(
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
      <path d="M60.1763 531.229C62.9815 528.858 64.6986 525.454 64.706 521.781C64.8618 444.269 70.3334 286.267 178.175 286.267C286.015 286.267 291.489 444.269 291.643 521.781C291.651 525.454 293.368 528.858 296.173 531.229C346.423 573.7 358.49 644.613 352.927 688.051H3.42227C-2.14081 644.613 9.92634 573.7 60.1763 531.229Z" fill="currentColor"/>
    </svg>
  )
);

Geometric27Shapes.displayName = "Geometric27Shapes";

export const Geometric27ShapesMetadata = {
  id: "geometric27_shapes",
  baseId: "geometric27",
  variant: "shapes",
  name: "Geometric27",
  category: "geometric",
  tags: [],
  viewBox: "0 0 357 713",
} as const;

export default Geometric27Shapes;
