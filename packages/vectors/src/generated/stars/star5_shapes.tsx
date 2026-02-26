
'use client';
import React from 'react';

export interface Star5ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Star5Shapes = React.forwardRef<SVGSVGElement, Star5ShapesProps>(
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
      <g clipPath="url(#clip0_2068_126)">
<path d="M13.8156 7.26251L12 0L10.1844 7.26246L5.55128 5.55114L7.26264 10.1843L0 12L7.26256 13.8156L5.55122 18.4488L10.1844 16.7374L12 24L13.8157 16.7374L18.4489 18.4488L16.7376 13.8156L24 12L16.7375 10.1844L18.4489 5.55113L13.8156 7.26251Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_126">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Star5Shapes.displayName = "Star5Shapes";

export const Star5ShapesMetadata = {
  id: "star5_shapes",
  baseId: "star5",
  variant: "shapes",
  name: "Star5",
  category: "stars",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Star5Shapes;
