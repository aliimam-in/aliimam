/**
 * Auto-generated logo component: Star7 (shapes)
 * Category: stars
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Star7ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Star7Shapes = React.forwardRef<SVGSVGElement, Star7ShapesProps>(
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
      <g clipPath="url(#clip0_2068_122)">
<path d="M17.9905 6.00007C14.6803 6.01033 12 8.69268 12 12.0001C12 8.69268 9.31969 6.01024 6.00947 6.00001C9.31963 5.98979 12 3.30741 12 0C12 3.30741 14.6803 5.98988 17.9905 6.00007Z" />
<path d="M11.9811 12.0001C8.67087 12.0104 5.99053 14.6927 5.99053 18.0001C5.99053 14.6927 3.31022 12.0103 0 12C3.31016 11.9898 5.99053 9.30744 5.99053 6.00003C5.99053 9.30744 8.67081 11.9899 11.9811 12.0001Z" />
<path d="M24 12.0001C20.6898 12.0104 18.0095 14.6927 18.0095 18.0001C18.0095 14.6927 15.3292 12.0103 12.0189 12C15.3291 11.9898 18.0095 9.30744 18.0095 6.00003C18.0095 9.30744 20.6898 11.9899 24 12.0001Z" />
<path d="M17.9905 18.0001C14.6803 18.0104 12 20.6927 12 24.0002C12 20.6927 9.31969 18.0103 6.00947 18.0001C9.31963 17.9899 12 15.3075 12 12.0001C12 15.3075 14.6803 17.9899 17.9905 18.0001Z" />
</g>
<defs>
<clipPath id="clip0_2068_122">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  )
);

Star7Shapes.displayName = "Star7Shapes";

export const Star7ShapesMetadata = {
  id: "star7_shapes",
  baseId: "star7",
  variant: "shapes",
  name: "Star7",
  category: "stars",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Star7Shapes;
