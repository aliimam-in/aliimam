
'use client';
import React from 'react';

export interface Number8ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Number8Shapes = React.forwardRef<SVGSVGElement, Number8ShapesProps>(
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
      <g clipPath="url(#clip0_2068_913)">
<path d="M0 10.8H12V24H24L24 10.8C24 4.83533 18.6274 4.96929e-07 12 4.96929e-07L5.08626e-07 0L0 10.8Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_913">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Number8Shapes.displayName = "Number8Shapes";

export const Number8ShapesMetadata = {
  id: "number8_shapes",
  baseId: "number8",
  variant: "shapes",
  name: "Number8",
  category: "number",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number8Shapes;
