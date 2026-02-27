/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VolumeUpRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VolumeUpRounded = React.forwardRef<SVGSVGElement, VolumeUpRoundedProps>(
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
      <path d="M2 9.95997V14.04C2 16.08 3.02 17.1 5.06 17.1H6.52C6.9 17.1 7.28 17.21 7.6 17.41L10.58 19.27C13.16 20.88 15.26 19.71 15.26 16.67V7.31997C15.26 4.27997 13.15 3.10997 10.58 4.71997L7.6 6.58997C7.27 6.78997 6.9 6.89997 6.52 6.89997H5.06C3.02 6.89997 2 7.91997 2 9.95997Z" stroke="#292D32" strokeWidth="1.5"/>
<path d="M18 12H22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 14V10" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VolumeUpRounded.displayName = "VolumeUpRounded";
export const VolumeUpRoundedMetadata = { 
  id: "volume-up_rounded", 
  baseId: "volume-up", 
  variant: "rounded", 
  name: "Volume Up", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VolumeUpRounded;
