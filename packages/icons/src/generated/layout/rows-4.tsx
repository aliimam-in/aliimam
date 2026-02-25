/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Rows4Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Rows4 = React.forwardRef<SVGSVGElement, Rows4Props>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="M21 7.5H3" />
  <path d="M21 12H3" />
  <path d="M21 16.5H3" />
    </svg>
  )
);
Rows4.displayName = "Rows4";
export const Rows4Metadata = { 
  id: "rows-4", 
  baseId: "rows-4", 
  variant: "default", 
  name: "Rows 4", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Rows4;
