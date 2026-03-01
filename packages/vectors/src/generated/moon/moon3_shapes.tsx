
'use client';
import React from 'react';

export interface Moon3ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Moon3Shapes = React.forwardRef<SVGSVGElement, Moon3ShapesProps>(
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
      <g clipPath="url(#clip0_2068_397)">
<path d="M24 1.08V0L0 1.58912e-07L1.89954e-08 1.08C1.03406e-07 5.87926 2.81737 10.0205 6.88841 11.94C2.81737 13.8595 -8.49442e-08 18.0007 1.18235e-07 22.8L1.69038e-07 24L24 24V22.8C24 18.0007 21.1826 13.8595 17.1116 11.94C21.1826 10.0205 24 5.87926 24 1.08Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_397">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Moon3Shapes.displayName = "Moon3Shapes";

export const Moon3ShapesMetadata = {
  id: "moon3_shapes",
  baseId: "moon3",
  variant: "shapes",
  name: "Moon3",
  category: "moon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Moon3Shapes;
