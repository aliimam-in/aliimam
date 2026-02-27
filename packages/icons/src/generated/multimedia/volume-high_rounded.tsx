/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VolumeHighRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VolumeHighRounded = React.forwardRef<SVGSVGElement, VolumeHighRoundedProps>(
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
      <path d="M2 10V14C2 16 3 17 5 17H6.43C6.8 17 7.17 17.11 7.49 17.3L10.41 19.13C12.93 20.71 15 19.56 15 16.59V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10Z"  />
<path d="M18 8C19.78 10.37 19.78 13.63 18 16"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.8301 5.5C22.7201 9.35 22.7201 14.65 19.8301 18.5"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VolumeHighRounded.displayName = "VolumeHighRounded";
export const VolumeHighRoundedMetadata = { 
  id: "volume-high_rounded", 
  baseId: "volume-high", 
  variant: "rounded", 
  name: "Volume High", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VolumeHighRounded;
