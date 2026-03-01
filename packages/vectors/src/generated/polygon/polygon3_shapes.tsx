
'use client';
import React from 'react';

export interface Polygon3ShapesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string; 
}

export const Polygon3Shapes = React.forwardRef<SVGSVGElement, Polygon3ShapesProps>(
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
      <g clipPath="url(#clip0_2068_490)">
<path d="M15.6646 1.57592e-06C16.4921 -0.000829559 17.2861 0.327122 17.8719 0.911711L23.0765 6.10591C23.6623 6.6905 23.9918 7.48384 23.9927 8.3114L24.0001 15.6645C24.0009 16.4921 23.6729 17.2861 23.0884 17.8718L17.8941 23.0765C17.3096 23.6622 16.5162 23.9918 15.6887 23.9926L8.33556 24C7.508 24.0008 6.714 23.6729 6.12823 23.0883L0.923588 17.8941C0.337824 17.3095 0.00827856 16.5162 0.00744743 15.6886L6.26111e-05 8.3355C-0.000768524 7.50793 0.327183 6.71394 0.911772 6.12817L6.10597 0.923527C6.69056 0.337763 7.4839 0.00821753 8.31147 0.00738639L15.6646 1.57592e-06Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_2068_490">
<rect width="24" height="24" fill="currentColor"/>
</clipPath>
</defs>
    </svg>
  )
);

Polygon3Shapes.displayName = "Polygon3Shapes";

export const Polygon3ShapesMetadata = {
  id: "polygon3_shapes",
  baseId: "polygon3",
  variant: "shapes",
  name: "Polygon3",
  category: "polygon",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Polygon3Shapes;
