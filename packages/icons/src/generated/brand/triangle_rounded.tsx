/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TriangleRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const TriangleRounded = React.forwardRef<SVGSVGElement, TriangleRoundedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M10.8999 2L0.899902 12L10.8999 22V18L4.8999 12L10.8999 6V2Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.8999 2L22.8999 12L12.8999 22V18L18.8999 12L12.8999 6V2Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.8999 9L7.8999 12L10.8999 15V9Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
TriangleRounded.displayName = "TriangleRounded";
export const TriangleRoundedMetadata = { 
  id: "triangle_rounded", 
  baseId: "triangle", 
  variant: "rounded", 
  name: "Triangle", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default TriangleRounded;
