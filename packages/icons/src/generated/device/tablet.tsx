/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface TabletProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Tablet = React.forwardRef<SVGSVGElement, TabletProps>(
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
  <line x1="12" x2="12.01" y1="18" y2="18" />
    </svg>
  )
);
Tablet.displayName = "Tablet";
export const TabletMetadata = { 
  id: "tablet", 
  baseId: "tablet", 
  variant: "default", 
  name: "Tablet", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Tablet;
