/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface RefreshCwProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const RefreshCw = React.forwardRef<SVGSVGElement, RefreshCwProps>(
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
  <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
  <path d="M8 16H3v5" />
    </svg>
  )
);
RefreshCw.displayName = "RefreshCw";
export const RefreshCwMetadata = { 
  id: "refresh-cw", 
  baseId: "refresh-cw", 
  variant: "default", 
  name: "Refresh Cw", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default RefreshCw;
