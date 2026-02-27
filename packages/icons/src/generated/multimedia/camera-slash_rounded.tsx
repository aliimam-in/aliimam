/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface CameraSlashRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const CameraSlashRounded = React.forwardRef<SVGSVGElement, CameraSlashRoundedProps>(
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
      <path d="M6 10H9"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.76001 22H17.24C20 22 21.1 20.31 21.23 18.25L21.75 9.99001C21.81 9.06001 21.52 8.19001 21.01 7.51001"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.9999 6C17.3899 6 16.8299 5.65 16.5499 5.11L15.8299 3.66C15.3699 2.75 14.1699 2 13.1499 2H10.8599C9.82992 2 8.62992 2.75 8.16992 3.66L7.44992 5.11C7.16992 5.65 6.60992 6 5.99992 6C3.82992 6 2.10992 7.83 2.24992 9.99L2.76992 18.25C2.81992 19.07 3.02992 19.84 3.43992 20.46"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 17.31C10.55 17.74 11.25 18 12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 14.11 15.07 13.52 14.75 13.02"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 2L2 22"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
CameraSlashRounded.displayName = "CameraSlashRounded";
export const CameraSlashRoundedMetadata = { 
  id: "camera-slash_rounded", 
  baseId: "camera-slash", 
  variant: "rounded", 
  name: "Camera Slash", 
  category: "multimedia", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default CameraSlashRounded;
