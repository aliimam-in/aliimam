
'use client';
import React from 'react';

export interface Flower1ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Flower1Shapes = React.forwardRef<SVGSVGElement, Flower1ShapesProps>(
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
      <g clipPath="url(#clip0_2068_583)">
<path d="M18.0006 15.7243C26.0023 20.6895 12.0009 29.3794 12.0009 19.4482C12.0009 29.3794 -1.99798 20.6895 6.00128 15.7243C-2.00043 20.6895 -2.00043 3.31051 6.00127 8.27568C-2.00043 3.31051 12.0009 -5.37943 12.0009 4.5518C12.0009 -5.37943 25.9998 3.31051 18.0006 8.27568C25.9998 3.31051 25.9998 20.6895 18.0006 15.7243Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_583">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Flower1Shapes.displayName = "Flower1Shapes";

export const Flower1ShapesMetadata = {
  id: "flower1_shapes",
  baseId: "flower1",
  variant: "shapes",
  name: "Flower1",
  category: "flower",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Flower1Shapes;
