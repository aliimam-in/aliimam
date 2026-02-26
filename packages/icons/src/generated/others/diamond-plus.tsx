/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiamondPlusProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DiamondPlus = React.forwardRef<SVGSVGElement, DiamondPlusProps>(
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
      <path d="M12 8v8" />
  <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" />
  <path d="M8 12h8" />
    </svg>
  )
);
DiamondPlus.displayName = "DiamondPlus";
export const DiamondPlusMetadata = { 
  id: "diamond-plus", 
  baseId: "diamond-plus", 
  variant: "default", 
  name: "Diamond Plus", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DiamondPlus;
