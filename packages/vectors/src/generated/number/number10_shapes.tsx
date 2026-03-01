
'use client';
import React from 'react';

export interface Number10ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Number10Shapes = React.forwardRef<SVGSVGElement, Number10ShapesProps>(
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
      <g clipPath="url(#clip0_2068_911)">
<path d="M24 13.2C24 19.1647 18.6274 24 12 24L12 13.2L7.33334 13.2C3.28325 13.2 -1.90735e-06 10.2451 -1.90735e-06 6.6C-1.90735e-06 2.95492 3.28325 0 7.33333 0H12C18.6274 0 24 4.83533 24 10.8V13.2Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_911">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Number10Shapes.displayName = "Number10Shapes";

export const Number10ShapesMetadata = {
  id: "number10_shapes",
  baseId: "number10",
  variant: "shapes",
  name: "Number10",
  category: "number",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number10Shapes;
