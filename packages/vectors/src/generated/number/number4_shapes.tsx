
'use client';
import React from 'react';

export interface Number4ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Number4Shapes = React.forwardRef<SVGSVGElement, Number4ShapesProps>(
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
      <g clipPath="url(#clip0_2068_918)">
<path d="M3.8147e-07 0L0 8.4L3.33333 8.4L3.33333 15.6H3.8147e-07L0 24H16.6667C20.7168 24 24 21.0451 24 17.4C24 15.1678 22.7687 13.1944 20.8841 12C22.7687 10.8056 24 8.83219 24 6.6C24 2.95492 20.7168 6.79137e-07 16.6667 3.75458e-07L3.8147e-07 0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_918">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Number4Shapes.displayName = "Number4Shapes";

export const Number4ShapesMetadata = {
  id: "number4_shapes",
  baseId: "number4",
  variant: "shapes",
  name: "Number4",
  category: "number",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number4Shapes;
