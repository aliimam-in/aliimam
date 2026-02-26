/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface AppWindowProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const AppWindow = React.forwardRef<SVGSVGElement, AppWindowProps>(
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
  <path d="M10 4v4" />
  <path d="M2 8h20" />
  <path d="M6 4v4" />
    </svg>
  )
);
AppWindow.displayName = "AppWindow";
export const AppWindowMetadata = { 
  id: "app-window", 
  baseId: "app-window", 
  variant: "default", 
  name: "App Window", 
  category: "app", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default AppWindow;
