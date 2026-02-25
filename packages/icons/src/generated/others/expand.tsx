/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ExpandProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Expand = React.forwardRef<SVGSVGElement, ExpandProps>(
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
      <path d="m15 15 6 6" />
  <path d="m15 9 6-6" />
  <path d="M21 16v5h-5" />
  <path d="M21 8V3h-5" />
  <path d="M3 16v5h5" />
  <path d="m3 21 6-6" />
  <path d="M3 8V3h5" />
  <path d="M9 9 3 3" />
    </svg>
  )
);
Expand.displayName = "Expand";
export const ExpandMetadata = { 
  id: "expand", 
  baseId: "expand", 
  variant: "default", 
  name: "Expand", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Expand;
