/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface DashDashRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const DashDashRounded = React.forwardRef<SVGSVGElement, DashDashRoundedProps>(
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
      <path d="M7.0999 3.5H15.9999C19.9999 3.5 21.9999 6 21.9999 9.5V12C21.9999 17 18.9999 20.5 13.4999 20.5H3.8999L4.9999 16.2H12.3999C15.9999 16.2 17.6999 14 17.6999 10.9V10.7C17.6999 8.9 16.8999 7.7 14.6999 7.7H6.0999L7.0999 3.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 10.5H4.3C3.4 10.5 2.6 11.1 2.4 12L2 13.5H9.2C10.1 13.5 10.9 12.9 11.1 12L11.5 10.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
DashDashRounded.displayName = "DashDashRounded";
export const DashDashRoundedMetadata = { 
  id: "dash-dash_rounded", 
  baseId: "dash-dash", 
  variant: "rounded", 
  name: "Dash Dash", 
  category: "brand", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default DashDashRounded;
