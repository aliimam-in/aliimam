/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AppWindowMacProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AppWindowMac = React.forwardRef<SVGSVGElement, AppWindowMacProps>(
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="M6 8h.01" />
  <path d="M10 8h.01" />
  <path d="M14 8h.01" />
    </svg>
  )
);
AppWindowMac.displayName = "AppWindowMac";
export const AppWindowMacMetadata = { 
  id: "app-window-mac", 
  baseId: "app-window-mac", 
  variant: "default", 
  name: "App Window Mac", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AppWindowMac;
