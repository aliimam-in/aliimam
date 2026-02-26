/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LensConvexProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LensConvex = React.forwardRef<SVGSVGElement, LensConvexProps>(
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
      <path
    d="M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z" />
    </svg>
  )
);
LensConvex.displayName = "LensConvex";
export const LensConvexMetadata = { 
  id: "lens-convex", 
  baseId: "lens-convex", 
  variant: "default", 
  name: "Lens Convex", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LensConvex;
