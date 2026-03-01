
'use client';
import React from 'react';

export interface Moon5ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Moon5Shapes = React.forwardRef<SVGSVGElement, Moon5ShapesProps>(
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
      <g clipPath="url(#clip0_2068_396)">
<path d="M6.00001 11.7143C6.00001 8.87268 6.94822 6.14746 8.63605 4.13814C10.3239 2.12882 12.6131 1 15 0.999998C17.387 0.999998 19.6762 2.12882 21.364 4.13814C23.0518 6.14746 24 8.87268 24 11.7143L6.00001 11.7143Z" fill="currentColor"/>
<path d="M0 12.2857C0 15.1273 0.948213 17.8525 2.63604 19.8619C4.32387 21.8712 6.61306 23 9.00001 23C11.387 23 13.6762 21.8712 15.364 19.8619C17.0518 17.8525 18 15.1273 18 12.2857L0 12.2857Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_396">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Moon5Shapes.displayName = "Moon5Shapes";

export const Moon5ShapesMetadata = {
  id: "moon5_shapes",
  baseId: "moon5",
  variant: "shapes",
  name: "Moon5",
  category: "moon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Moon5Shapes;
