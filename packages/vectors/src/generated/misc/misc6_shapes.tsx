
'use client';
import React from 'react';

export interface Misc6ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Misc6Shapes = React.forwardRef<SVGSVGElement, Misc6ShapesProps>(
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
      <g clipPath="url(#clip0_2068_653)">
<path d="M24 12C17.3726 12 12 17.3726 12 24H0L1.04908e-06 12C6.62743 12 12 6.62742 12 0L24 1.57361e-06L24 12Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_653">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Misc6Shapes.displayName = "Misc6Shapes";

export const Misc6ShapesMetadata = {
  id: "misc6_shapes",
  baseId: "misc6",
  variant: "shapes",
  name: "Misc6",
  category: "misc",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Misc6Shapes;
