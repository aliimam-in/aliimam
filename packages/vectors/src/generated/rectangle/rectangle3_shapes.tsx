
'use client';
import React from 'react';

export interface Rectangle3ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Rectangle3Shapes = React.forwardRef<SVGSVGElement, Rectangle3ShapesProps>(
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
      <g clipPath="url(#clip0_2068_684)">
<path d="M12 0L24.0004 12.0005L12 24.0009L-0.000488281 12.0005L12 0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_684">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Rectangle3Shapes.displayName = "Rectangle3Shapes";

export const Rectangle3ShapesMetadata = {
  id: "rectangle3_shapes",
  baseId: "rectangle3",
  variant: "shapes",
  name: "Rectangle3",
  category: "rectangle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Rectangle3Shapes;
