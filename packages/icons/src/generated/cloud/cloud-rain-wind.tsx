/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CloudRainWindProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CloudRainWind = React.forwardRef<SVGSVGElement, CloudRainWindProps>(
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="m9.2 22 3-7" />
  <path d="m9 13-3 7" />
  <path d="m17 13-3 7" />
    </svg>
  )
);
CloudRainWind.displayName = "CloudRainWind";
export const CloudRainWindMetadata = { 
  id: "cloud-rain-wind", 
  baseId: "cloud-rain-wind", 
  variant: "default", 
  name: "Cloud Rain Wind", 
  category: "cloud", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CloudRainWind;
