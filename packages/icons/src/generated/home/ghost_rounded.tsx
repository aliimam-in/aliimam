/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface GhostRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const GhostRounded = React.forwardRef<SVGSVGElement, GhostRoundedProps>(
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
      <path d="M22 20.07V12.18C22 6.57999 17.5 2 12 2C6.5 2 2 6.57999 2 12.18V20.07C2 21.33 2.74998 21.67 3.66998 20.83L4.66998 19.92C5.03998 19.58 5.64001 19.58 6.01001 19.92L8.01001 21.75C8.38001 22.09 8.97998 22.09 9.34998 21.75L11.35 19.92C11.72 19.58 12.32 19.58 12.69 19.92L14.69 21.75C15.06 22.09 15.66 22.09 16.03 21.75L18.03 19.92C18.4 19.58 19 19.58 19.37 19.92L20.37 20.83C21.25 21.67 22 21.33 22 20.07Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 14C10.37 15.78 13.63 15.78 16 14"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
GhostRounded.displayName = "GhostRounded";
export const GhostRoundedMetadata = { 
  id: "ghost_rounded", 
  baseId: "ghost", 
  variant: "rounded", 
  name: "Ghost", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default GhostRounded;
