/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlagTriangleLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlagTriangleLeft = React.forwardRef<SVGSVGElement, FlagTriangleLeftProps>(
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
      <path d="M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5" />
    </svg>
  )
);
FlagTriangleLeft.displayName = "FlagTriangleLeft";
export const FlagTriangleLeftMetadata = { 
  id: "flag-triangle-left", 
  baseId: "flag-triangle-left", 
  variant: "default", 
  name: "Flag Triangle Left", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlagTriangleLeft;
