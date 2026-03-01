
'use client';
import React from 'react';

export interface Flower5ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Flower5Shapes = React.forwardRef<SVGSVGElement, Flower5ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2068_582)">
<path d="M16.8474 7.15263C21.0602 7.75728 24 9.27361 24 12C24 14.7264 21.0602 16.2427 16.8474 16.8474C16.2427 21.0602 14.7264 24 12 24C9.27361 24 7.75728 21.0602 7.15263 16.8474C2.93978 16.2427 0 14.7264 0 12C2.48619e-07 9.27361 2.93978 7.75728 7.15263 7.15263C7.75728 2.93978 9.27361 0 12 0C14.7264 0 16.2427 2.93978 16.8474 7.15263Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_582">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Flower5Shapes.displayName = "Flower5Shapes";

export const Flower5ShapesMetadata = {
  id: "flower5_shapes",
  baseId: "flower5",
  variant: "shapes",
  name: "Flower5",
  category: "flower",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flower5Shapes;
