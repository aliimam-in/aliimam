/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface VolumeSlashRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const VolumeSlashRounded = React.forwardRef<SVGSVGElement, VolumeSlashRoundedProps>(
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
      <path d="M15 8.37003V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10V14C2 16 3 17 5 17H7" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.4099 19.13C12.9299 20.71 14.9999 19.56 14.9999 16.59V12.95" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.81 9.42004C19.71 11.57 19.44 14.08 18 16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.1501 7.80005C22.6201 11.29 22.1801 15.37 19.8301 18.5" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 2L2 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
VolumeSlashRounded.displayName = "VolumeSlashRounded";
export const VolumeSlashRoundedMetadata = { 
  id: "volume-slash_rounded", 
  baseId: "volume-slash", 
  variant: "rounded", 
  name: "Volume Slash", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default VolumeSlashRounded;
