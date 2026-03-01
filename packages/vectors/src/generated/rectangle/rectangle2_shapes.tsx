
'use client';
import React from 'react';

export interface Rectangle2ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Rectangle2Shapes = React.forwardRef<SVGSVGElement, Rectangle2ShapesProps>(
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
      <g clipPath="url(#clip0_2068_686)">
<rect width="24" height="24" rx="12" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_686">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Rectangle2Shapes.displayName = "Rectangle2Shapes";

export const Rectangle2ShapesMetadata = {
  id: "rectangle2_shapes",
  baseId: "rectangle2",
  variant: "shapes",
  name: "Rectangle2",
  category: "rectangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rectangle2Shapes;
