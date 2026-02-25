/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Rows3Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Rows3 = React.forwardRef<SVGSVGElement, Rows3Props>(
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
  <path d="M21 9H3" />
  <path d="M21 15H3" />
    </svg>
  )
);
Rows3.displayName = "Rows3";
export const Rows3Metadata = { 
  id: "rows-3", 
  baseId: "rows-3", 
  variant: "default", 
  name: "Rows 3", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Rows3;
