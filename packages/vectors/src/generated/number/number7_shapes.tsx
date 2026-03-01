
'use client';
import React from 'react';

export interface Number7ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Number7Shapes = React.forwardRef<SVGSVGElement, Number7ShapesProps>(
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
      <g clipPath="url(#clip0_2068_917)">
<path d="M0 10.8C-3.8147e-07 4.83533 5.37258 3.97544e-07 12 0L12 10.8L16.6667 10.8C20.7168 10.8 24 13.7549 24 17.4C24 21.0451 20.7168 24 16.6667 24H12C5.37258 24 -3.8147e-07 19.1647 0 13.2V10.8Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_917">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Number7Shapes.displayName = "Number7Shapes";

export const Number7ShapesMetadata = {
  id: "number7_shapes",
  baseId: "number7",
  variant: "shapes",
  name: "Number7",
  category: "number",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number7Shapes;
