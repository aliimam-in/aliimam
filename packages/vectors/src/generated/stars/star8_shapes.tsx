/**
 * Auto-generated logo component: Star8 (shapes)
 * Category: stars
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Star8ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Star8Shapes = React.forwardRef<SVGSVGElement, Star8ShapesProps>(
  ({ size = 24, className = '', ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg" 
      {...props}
    >
      <g clipPath="url(#clip0_2068_121)">
<path d="M12 0C13.4908 7.48588 16.4707 10.4947 24 12C16.469 13.5053 13.4891 16.5141 12 24C10.5092 16.5141 7.52927 13.5035 0 12C7.53102 10.4947 10.5109 7.48588 12 0Z" />
</g>
<defs>
<clipPath id="clip0_2068_121">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Star8Shapes.displayName = "Star8Shapes";

export const Star8ShapesMetadata = {
  id: "star8_shapes",
  baseId: "star8",
  variant: "shapes",
  name: "Star8",
  category: "stars",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Star8Shapes;
