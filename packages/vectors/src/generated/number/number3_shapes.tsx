
'use client';
import React from 'react';

export interface Number3ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Number3Shapes = React.forwardRef<SVGSVGElement, Number3ShapesProps>(
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
      <g clipPath="url(#clip0_2068_919)">
<path d="M16 2.91409e-07C20.4183 6.411e-07 24 3.22355 24 7.2V8.4C24 12.3755 20.4201 15.5984 16.0033 15.6H24V24H0L3.8147e-07 15.6C3.8147e-07 11.625 3.57918 8.40229 7.99529 8.4H0C2.54313e-07 3.76081 4.17868 -2.25317e-07 9.33333 0L16 2.91409e-07Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_919">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Number3Shapes.displayName = "Number3Shapes";

export const Number3ShapesMetadata = {
  id: "number3_shapes",
  baseId: "number3",
  variant: "shapes",
  name: "Number3",
  category: "number",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number3Shapes;
