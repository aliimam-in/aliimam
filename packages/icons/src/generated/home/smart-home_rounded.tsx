/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SmartHomeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SmartHomeRounded = React.forwardRef<SVGSVGElement, SmartHomeRoundedProps>(
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
      <path d="M11.4 21.8101H17.6C19.03 21.8101 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99002 20.86 8.37002L13.93 2.82998C12.86 1.96998 11.13 1.96997 10.07 2.81997L3.14004 8.37002C2.36004 8.99002 1.86002 10.3 2.03002 11.28L2.31002 12.96" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 19C3.76 19.04 4.96 20.24 5 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 22C7.99 21.24 7.86 20.53 7.63 19.88C7.04 18.21 5.78 16.96 4.12 16.37C3.47 16.14 2.76 16.01 2 16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.9955 22H2.0045" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SmartHomeRounded.displayName = "SmartHomeRounded";
export const SmartHomeRoundedMetadata = { 
  id: "smart-home_rounded", 
  baseId: "smart-home", 
  variant: "rounded", 
  name: "Smart Home", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SmartHomeRounded;
