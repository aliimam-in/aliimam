/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DiamondProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Diamond = React.forwardRef<SVGSVGElement, DiamondProps>(
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
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  )
);
Diamond.displayName = "Diamond";
export const DiamondMetadata = { 
  id: "diamond", 
  baseId: "diamond", 
  variant: "default", 
  name: "Diamond", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Diamond;
