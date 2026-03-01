
'use client';
import React from 'react';

export interface Misc2ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Misc2Shapes = React.forwardRef<SVGSVGElement, Misc2ShapesProps>(
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
      <g clipPath="url(#clip0_2068_658)">
<path d="M18.96 -2.18096e-05C21.7435 -2.19313e-05 24 2.25647 24 5.03998L24 15.84L16.32 15.84L16.32 7.67998L8.16001 7.67998L8.16001 -2.32449e-05L18.96 -2.18096e-05Z" fill="currentColor"/>
<path d="M5.04 24C2.25649 24 6.92176e-08 21.7435 -5.24537e-08 18.96L-5.24537e-07 8.15999L7.68001 8.15999L7.68001 16.32L15.84 16.32L15.84 24L5.04 24Z" fill="currentColor"/>
<path d="M3.84 7.67998C1.71923 7.67998 -1.14178e-06 5.96076 -8.81222e-07 3.83998C-8.81222e-07 1.71921 1.71923 -2.29633e-05 3.84 -2.3056e-05C5.96078 -2.31487e-05 7.68001 1.71921 7.68001 3.83998C7.68001 5.96076 5.96078 7.67998 3.84 7.67998Z" fill="currentColor"/>
<path d="M15.84 12C15.84 9.87921 14.1208 8.15999 12 8.15999C9.87923 8.15999 8.16001 9.87921 8.16001 12C8.16001 14.1208 9.87923 15.84 12 15.84C14.1208 15.84 15.84 14.1208 15.84 12Z" fill="currentColor"/>
<path d="M24 20.16C24 18.0392 22.2808 16.32 20.16 16.32C18.0392 16.32 16.32 18.0392 16.32 20.16C16.32 22.2808 18.0392 24 20.16 24C22.2808 24 24 22.2808 24 20.16Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_658">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Misc2Shapes.displayName = "Misc2Shapes";

export const Misc2ShapesMetadata = {
  id: "misc2_shapes",
  baseId: "misc2",
  variant: "shapes",
  name: "Misc2",
  category: "misc",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Misc2Shapes;
