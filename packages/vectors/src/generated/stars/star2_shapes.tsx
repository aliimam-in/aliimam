
'use client';
import React from 'react';

export interface Star2ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Star2Shapes = React.forwardRef<SVGSVGElement, Star2ShapesProps>(
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
      <g clipPath="url(#clip0_2068_128)">
<path d="M12 0L15.2632 8.5443L24 9.16718L17.28 15.0707L19.4164 24L12 19.1043L4.58359 24L6.72 15.0707L0 9.16718L8.73678 8.5443L12 0Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_128">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Star2Shapes.displayName = "Star2Shapes";

export const Star2ShapesMetadata = {
  id: "star2_shapes",
  baseId: "star2",
  variant: "shapes",
  name: "Star2",
  category: "stars",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Star2Shapes;
