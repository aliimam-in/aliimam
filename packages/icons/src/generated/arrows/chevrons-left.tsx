/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ChevronsLeftProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ChevronsLeft = React.forwardRef<SVGSVGElement, ChevronsLeftProps>(
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
      <path d="m11 17-5-5 5-5" />
  <path d="m18 17-5-5 5-5" />
    </svg>
  )
);
ChevronsLeft.displayName = "ChevronsLeft";
export const ChevronsLeftMetadata = { 
  id: "chevrons-left", 
  baseId: "chevrons-left", 
  variant: "default", 
  name: "Chevrons Left", 
  category: "arrows", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ChevronsLeft;
