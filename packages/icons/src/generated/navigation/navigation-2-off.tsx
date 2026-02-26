/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Navigation2OffProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Navigation2Off = React.forwardRef<SVGSVGElement, Navigation2OffProps>(
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
      <path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" />
  <path d="M14.53 8.88 12 2l-1.17 3.17" />
  <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  )
);
Navigation2Off.displayName = "Navigation2Off";
export const Navigation2OffMetadata = { 
  id: "navigation-2-off", 
  baseId: "navigation-2-off", 
  variant: "default", 
  name: "Navigation 2 Off", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Navigation2Off;
