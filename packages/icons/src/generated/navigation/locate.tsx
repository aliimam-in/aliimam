/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LocateProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Locate = React.forwardRef<SVGSVGElement, LocateProps>(
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
      <line x1="2" x2="5" y1="12" y2="12" />
  <line x1="19" x2="22" y1="12" y2="12" />
  <line x1="12" x2="12" y1="2" y2="5" />
  <line x1="12" x2="12" y1="19" y2="22" />
  <circle cx="12" cy="12" r="7" />
    </svg>
  )
);
Locate.displayName = "Locate";
export const LocateMetadata = { 
  id: "locate", 
  baseId: "locate", 
  variant: "default", 
  name: "Locate", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Locate;
