
'use client';
import React from 'react';

export interface Geometric38ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Geometric38Shapes = React.forwardRef<SVGSVGElement, Geometric38ShapesProps>(
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
      <path d="M699.105 298.146H7.78125C17.7662 215.706 80.1631 152.202 155.647 152.202C156.585 152.202 157.521 152.212 158.454 152.232C198.468 102.842 259.61 71.27 328.126 71.27C417.96 71.27 495.118 125.545 528.596 203.093C540.082 200.188 552.159 198.639 564.621 198.639C629.83 198.639 684.5 241.059 699.105 298.146Z" fill="currentColor"/>
    </svg>
  )
);

Geometric38Shapes.displayName = "Geometric38Shapes";

export const Geometric38ShapesMetadata = {
  id: "geometric38_shapes",
  baseId: "geometric38",
  variant: "shapes",
  name: "Geometric38",
  category: "geometric",
  tags: [],
  viewBox: "0 0 713 357",
} as const;

export default Geometric38Shapes;
