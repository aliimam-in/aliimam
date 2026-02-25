/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NavigationProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const Navigation = React.forwardRef<SVGSVGElement, NavigationProps>(
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
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  )
);
Navigation.displayName = "Navigation";
export const NavigationMetadata = { 
  id: "navigation", 
  baseId: "navigation", 
  variant: "default", 
  name: "Navigation", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default Navigation;
