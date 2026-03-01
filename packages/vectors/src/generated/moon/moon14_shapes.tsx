
'use client';
import React from 'react';

export interface Moon14ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Moon14Shapes = React.forwardRef<SVGSVGElement, Moon14ShapesProps>(
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
      <g clipPath="url(#clip0_2068_388)">
<path d="M4.11775 0C1.4812 2.63655 1.92636e-08 6.21248 0 9.94113C-1.92636e-08 13.6698 1.4812 17.2457 4.11775 19.8823C6.7543 22.5188 10.3302 24 14.0589 24C17.7875 24 21.3634 22.5188 24 19.8823L4.11775 0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_388">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Moon14Shapes.displayName = "Moon14Shapes";

export const Moon14ShapesMetadata = {
  id: "moon14_shapes",
  baseId: "moon14",
  variant: "shapes",
  name: "Moon14",
  category: "moon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Moon14Shapes;
