
'use client';
import React from 'react';

export interface Moon8ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Moon8Shapes = React.forwardRef<SVGSVGElement, Moon8ShapesProps>(
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
      <g clipPath="url(#clip0_2068_391)">
<path d="M20.4849 20.4853C18.2345 22.7357 15.1823 24 11.9997 24V12.027C11.9852 15.3283 9.30453 18 5.99989 18C2.68624 18 1.44844e-07 15.3137 0 12C-1.44844e-07 8.6863 2.68624 6 5.99989 6C9.30453 6 11.9852 8.67171 11.9997 11.973L11.9997 0C15.1823 6.19675e-07 18.2345 1.26428 20.4849 3.51472C22.7353 5.76516 23.9995 8.81741 23.9995 12C23.9995 15.1826 22.7353 18.2349 20.4849 20.4853Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_391">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Moon8Shapes.displayName = "Moon8Shapes";

export const Moon8ShapesMetadata = {
  id: "moon8_shapes",
  baseId: "moon8",
  variant: "shapes",
  name: "Moon8",
  category: "moon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Moon8Shapes;
