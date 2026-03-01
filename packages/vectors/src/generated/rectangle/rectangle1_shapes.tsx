
'use client';
import React from 'react';

export interface Rectangle1ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Rectangle1Shapes = React.forwardRef<SVGSVGElement, Rectangle1ShapesProps>(
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
      <g clipPath="url(#clip0_2068_687)">
<rect width="24" height="24" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_687">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Rectangle1Shapes.displayName = "Rectangle1Shapes";

export const Rectangle1ShapesMetadata = {
  id: "rectangle1_shapes",
  baseId: "rectangle1",
  variant: "shapes",
  name: "Rectangle1",
  category: "rectangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rectangle1Shapes;
