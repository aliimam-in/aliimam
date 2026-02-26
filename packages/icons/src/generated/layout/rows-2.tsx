/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Rows2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Rows2 = React.forwardRef<SVGSVGElement, Rows2Props>(
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
  <path d="M3 12h18" />
    </svg>
  )
);
Rows2.displayName = "Rows2";
export const Rows2Metadata = { 
  id: "rows-2", 
  baseId: "rows-2", 
  variant: "default", 
  name: "Rows 2", 
  category: "layout", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Rows2;
