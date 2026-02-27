/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudRounded = React.forwardRef<SVGSVGElement, CloudRoundedProps>(
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
      <path d="M7.27004 13.01C6.74004 12.74 6.15004 12.6 5.55004 12.6C0.870039 12.93 0.870039 19.74 5.55004 20.07H16.64C17.99 20.08 19.29 19.58 20.28 18.67C23.57 15.8 21.81 10.03 17.48 9.48C15.92 0.110001 2.39004 3.67 5.60004 12.6"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8501 9.92001C16.3701 9.66001 16.9401 9.52001 17.5201 9.51001"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CloudRounded.displayName = "CloudRounded";
export const CloudRoundedMetadata = { 
  id: "cloud_rounded", 
  baseId: "cloud", 
  variant: "rounded", 
  name: "Cloud", 
  category: "weather", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloudRounded;
