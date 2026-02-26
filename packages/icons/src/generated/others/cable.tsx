/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CableProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Cable = React.forwardRef<SVGSVGElement, CableProps>(
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
      <path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z" />
  <path d="M17 21v-2" />
  <path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10" />
  <path d="M21 21v-2" />
  <path d="M3 5V3" />
  <path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z" />
  <path d="M7 5V3" />
    </svg>
  )
);
Cable.displayName = "Cable";
export const CableMetadata = { 
  id: "cable", 
  baseId: "cable", 
  variant: "default", 
  name: "Cable", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Cable;
