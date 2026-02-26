/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DockProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Dock = React.forwardRef<SVGSVGElement, DockProps>(
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
      <path d="M2 8h20" />
  <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="M6 16h12" />
    </svg>
  )
);
Dock.displayName = "Dock";
export const DockMetadata = { 
  id: "dock", 
  baseId: "dock", 
  variant: "default", 
  name: "Dock", 
  category: "others", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Dock;
