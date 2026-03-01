
'use client';
import React from 'react';

export interface Number2ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Number2Shapes = React.forwardRef<SVGSVGElement, Number2ShapesProps>(
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
      <g clipPath="url(#clip0_2068_915)">
<path d="M0 10.8H12V24H24V0H12L0 10.8Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_915">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Number2Shapes.displayName = "Number2Shapes";

export const Number2ShapesMetadata = {
  id: "number2_shapes",
  baseId: "number2",
  variant: "shapes",
  name: "Number2",
  category: "number",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number2Shapes;
