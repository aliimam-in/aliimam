
'use client';
import React from 'react';

export interface Moon11ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Moon11Shapes = React.forwardRef<SVGSVGElement, Moon11ShapesProps>(
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
      <g clipPath="url(#clip0_2068_398)">
<path d="M24 0C24 13.2548 13.2548 24 0 24C0 10.7452 10.7452 0 24 0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_398">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Moon11Shapes.displayName = "Moon11Shapes";

export const Moon11ShapesMetadata = {
  id: "moon11_shapes",
  baseId: "moon11",
  variant: "shapes",
  name: "Moon11",
  category: "moon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Moon11Shapes;
