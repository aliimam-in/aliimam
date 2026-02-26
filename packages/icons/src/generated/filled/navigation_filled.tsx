/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface NavigationFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const NavigationFilled = React.forwardRef<SVGSVGElement, NavigationFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M11.092 2.581a1 1 0 0 1 1.754 -.116l.062 .116l8.005 17.365c.198 .566 .05 1.196 -.378 1.615a1.53 1.53 0 0 1 -1.459 .393l-7.077 -2.398l-6.899 2.338a1.535 1.535 0 0 1 -1.52 -.231l-.112 -.1c-.398 -.386 -.556 -.954 -.393 -1.556l.047 -.15l7.97 -17.276z" />
    </svg>
  )
);
NavigationFilled.displayName = "NavigationFilled";
export const NavigationFilledMetadata = { 
  id: "navigation_filled", 
  baseId: "navigation", 
  variant: "filled", 
  name: "Navigation", 
  category: "filled", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default NavigationFilled;
