
'use client';
import React from 'react';

export interface Star9ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Star9Shapes = React.forwardRef<SVGSVGElement, Star9ShapesProps>(
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
      <g clipPath="url(#clip0_2068_125)">
<path d="M23.9623 0.0378516C17.3728 6.66832 17.3852 17.3852 24 24C17.3852 17.3852 6.6682 17.3726 0.0377344 23.9621C6.62719 17.3318 6.61477 6.61477 0 0C6.61477 6.61477 17.3318 6.62754 23.9623 0.0378516Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_125">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Star9Shapes.displayName = "Star9Shapes";

export const Star9ShapesMetadata = {
  id: "star9_shapes",
  baseId: "star9",
  variant: "shapes",
  name: "Star9",
  category: "stars",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Star9Shapes;
