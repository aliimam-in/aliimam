
'use client';
import React from 'react';

export interface Traingle5ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Traingle5Shapes = React.forwardRef<SVGSVGElement, Traingle5ShapesProps>(
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
      <g clipPath="url(#clip0_2068_227)">
<path d="M6.53046 6.13274C8.36138 2.63933 9.27684 0.892628 10.4875 0.334406C11.4546 -0.111469 12.5454 -0.111469 13.5125 0.334406C14.7232 0.892628 15.6386 2.63933 17.4695 6.13274L21.4293 13.6879C23.2413 17.1453 24.1474 19.0052 23.9804 20.422C23.8471 21.5539 23.423 22.4485 22.5905 23.1376C21.5485 24 19.6056 24 15.9597 24H8.04029C4.3944 24 2.45145 24 1.40946 23.1376C0.576985 22.4485 0.152895 21.5539 0.0195516 20.422C-0.147352 19.0052 0.758681 17.1453 2.57075 13.6879L6.53046 6.13274Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_227">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Traingle5Shapes.displayName = "Traingle5Shapes";

export const Traingle5ShapesMetadata = {
  id: "traingle5_shapes",
  baseId: "traingle5",
  variant: "shapes",
  name: "Traingle5",
  category: "triangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Traingle5Shapes;
