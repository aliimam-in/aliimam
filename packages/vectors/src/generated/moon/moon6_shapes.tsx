
'use client';
import React from 'react';

export interface Moon6ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Moon6Shapes = React.forwardRef<SVGSVGElement, Moon6ShapesProps>(
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
      <g clipPath="url(#clip0_2068_393)">
<path d="M4.13499 20.4853C6.78258 22.7357 10.3735 24 14.1177 24L14.1177 12.0446C14.1315 14.2563 15.1711 16.3749 17.0121 17.9397C18.8654 19.515 21.379 20.4 24 20.4L24 3.6C21.379 3.6 18.8654 4.485 17.0121 6.0603C15.1711 7.6251 14.1315 9.7437 14.1177 11.9554L14.1177 0C10.3735 6.19675e-07 6.78257 1.26428 4.13498 3.51472C1.4874 5.76516 0 8.8174 0 12C0 15.1826 1.4874 18.2348 4.13499 20.4853Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_393">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Moon6Shapes.displayName = "Moon6Shapes";

export const Moon6ShapesMetadata = {
  id: "moon6_shapes",
  baseId: "moon6",
  variant: "shapes",
  name: "Moon6",
  category: "moon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Moon6Shapes;
