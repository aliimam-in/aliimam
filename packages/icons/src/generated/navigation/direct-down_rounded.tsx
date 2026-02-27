/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DirectDownRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DirectDownRounded = React.forwardRef<SVGSVGElement, DirectDownRoundedProps>(
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
      <path d="M9.17005 19.29L3.07005 7.69999C1.62005 4.94999 4.55005 1.95999 7.33005 3.34999L10.57 4.96999C11.47 5.41999 12.53 5.41999 13.43 4.96999L16.67 3.34999C19.45 1.95999 22.37 4.94999 20.93 7.69999L14.83 19.29C13.63 21.57 10.37 21.57 9.17005 19.29Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DirectDownRounded.displayName = "DirectDownRounded";
export const DirectDownRoundedMetadata = { 
  id: "direct-down_rounded", 
  baseId: "direct-down", 
  variant: "rounded", 
  name: "Direct Down", 
  category: "navigation", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DirectDownRounded;
