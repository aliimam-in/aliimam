/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface WifiRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const WifiRounded = React.forwardRef<SVGSVGElement, WifiRoundedProps>(
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
      <path d="M4.91 11.84C9.21 8.52001 14.8 8.52001 19.1 11.84" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 8.35998C8.06 3.67998 15.94 3.67998 22 8.35998" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.78998 15.49C9.93998 13.05 14.05 13.05 17.2 15.49" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.39999 19.15C10.98 17.93 13.03 17.93 14.61 19.15" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
WifiRounded.displayName = "WifiRounded";
export const WifiRoundedMetadata = { 
  id: "wifi_rounded", 
  baseId: "wifi", 
  variant: "rounded", 
  name: "Wifi", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default WifiRounded;
