
'use client';
import React from 'react';

export interface Star6ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Star6Shapes = React.forwardRef<SVGSVGElement, Star6ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2068_127)">
<path d="M14.4 9.6L12 0L9.6 9.6L0 12L9.6 14.4L12 24L14.4 14.4L24 12L14.4 9.6Z" />
</g>
<defs>
<clipPath id="clip0_2068_127">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Star6Shapes.displayName = "Star6Shapes";

export const Star6ShapesMetadata = {
  id: "star6_shapes",
  baseId: "star6",
  variant: "shapes",
  name: "Star6",
  category: "stars",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Star6Shapes;
