/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface HomeWifiRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const HomeWifiRounded = React.forwardRef<SVGSVGElement, HomeWifiRoundedProps>(
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
      <path d="M10.07 2.81997L3.14001 8.37002C2.36001 8.99002 1.85999 10.3 2.02999 11.28L3.35998 19.24C3.59998 20.66 4.95998 21.8101 6.39998 21.8101H17.6C19.03 21.8101 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99002 20.86 8.37002L13.93 2.82998C12.86 1.96998 11.13 1.96997 10.07 2.81997Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.88 14.38C11.15 13.17 12.85 13.17 14.12 14.38"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.24 12.2601C15.7 11.7301 15.1 11.3201 14.48 11.0201C12.89 10.2601 11.11 10.2601 9.51001 11.0201C8.89001 11.3201 8.3 11.7301 7.75 12.2601"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 17H12.0045"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
HomeWifiRounded.displayName = "HomeWifiRounded";
export const HomeWifiRoundedMetadata = { 
  id: "home-wifi_rounded", 
  baseId: "home-wifi", 
  variant: "rounded", 
  name: "Home Wifi", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default HomeWifiRounded;
