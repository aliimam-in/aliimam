/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudFogRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudFogRounded = React.forwardRef<SVGSVGElement, CloudFogRoundedProps>(
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
      <path d="M4.28989 11.62C1.08989 2.68999 14.6199 -0.870008 16.1699 8.49999C18.0999 8.73999 19.5099 10.02 20.1999 11.62"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.54 8.92999C15.06 8.66999 15.6301 8.52999 16.2101 8.51999"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15.03H20"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 18.03H18"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 21.03H15"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CloudFogRounded.displayName = "CloudFogRounded";
export const CloudFogRoundedMetadata = { 
  id: "cloud-fog_rounded", 
  baseId: "cloud-fog", 
  variant: "rounded", 
  name: "Cloud Fog", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloudFogRounded;
