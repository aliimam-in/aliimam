
'use client';
import React from 'react';

export interface Misc5ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Misc5Shapes = React.forwardRef<SVGSVGElement, Misc5ShapesProps>(
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
      <g clipPath="url(#clip0_2068_654)">
<path d="M17.4 0C21.0451 0 24 3.24324 24 7.78378C24 16.8649 15 22.0541 12 24C9 22.0541 0 16.8649 0 7.78378C0 3.24324 3 0 6.6 0C8.83196 0 10.8 1.2973 12 2.59459C13.2 1.2973 15.168 0 17.4 0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_654">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Misc5Shapes.displayName = "Misc5Shapes";

export const Misc5ShapesMetadata = {
  id: "misc5_shapes",
  baseId: "misc5",
  variant: "shapes",
  name: "Misc5",
  category: "misc",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Misc5Shapes;
