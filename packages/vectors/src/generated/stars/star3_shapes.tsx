
'use client';
import React from 'react';

export interface Star3ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Star3Shapes = React.forwardRef<SVGSVGElement, Star3ShapesProps>(
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
      <g clipPath="url(#clip0_2068_124)">
<path d="M7.02942 4.2669e-07L12 3.77815L16.9705 0L17.8137 6.18627L24 7.02944L20.2218 12L24 16.9706L17.8137 17.8137L16.9705 24L12 20.2218L7.02942 24L6.18626 17.8137L-1.48321e-05 16.9706L3.77813 12L-1.52588e-05 7.02944L6.18626 6.18627L7.02942 4.2669e-07Z" />
</g>
<defs>
<clipPath id="clip0_2068_124">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Star3Shapes.displayName = "Star3Shapes";

export const Star3ShapesMetadata = {
  id: "star3_shapes",
  baseId: "star3",
  variant: "shapes",
  name: "Star3",
  category: "stars",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Star3Shapes;
