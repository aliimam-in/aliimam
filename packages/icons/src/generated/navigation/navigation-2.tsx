/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface Navigation2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Navigation2 = React.forwardRef<SVGSVGElement, Navigation2Props>(
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
      <polygon points="12 2 19 21 12 17 5 21 12 2" />
    </svg>
  )
);
Navigation2.displayName = "Navigation2";
export const Navigation2Metadata = { 
  id: "navigation-2", 
  baseId: "navigation-2", 
  variant: "default", 
  name: "Navigation 2", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Navigation2;
