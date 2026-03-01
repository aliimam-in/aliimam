
'use client';
import React from 'react';

export interface Moon4ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Moon4Shapes = React.forwardRef<SVGSVGElement, Moon4ShapesProps>(
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
      <g clipPath="url(#clip0_2068_395)">
<path d="M3.24 23.9998C1.15995 20.7238 4.57764e-07 16.4475 0 11.9999C0 7.55239 1.15995 3.27608 3.24 0V23.9998Z" fill="currentColor"/>
<path d="M24 24C20.8174 24 17.7652 22.7357 15.5147 20.4853C13.2643 18.2349 12 15.1826 12 12C12 8.81741 13.2643 5.76516 15.5147 3.51472C17.7652 1.26428 20.8174 1.14421e-06 24 5.24537e-07L24 24Z" fill="currentColor"/>
<path d="M7.23472 21.0582C8.46122 22.3675 9.92588 23.3641 11.52 24V0C9.92588 0.635857 8.46122 1.63247 7.23472 2.94178C4.98428 5.34417 3.72 8.6025 3.72 12C3.72 15.3975 4.98428 18.6558 7.23472 21.0582Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_395">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Moon4Shapes.displayName = "Moon4Shapes";

export const Moon4ShapesMetadata = {
  id: "moon4_shapes",
  baseId: "moon4",
  variant: "shapes",
  name: "Moon4",
  category: "moon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Moon4Shapes;
