/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface ExternalDriveRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const ExternalDriveRounded = React.forwardRef<SVGSVGElement, ExternalDriveRoundedProps>(
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
      <path d="M16 22H9C6 22 4 20 4 17V7C4 4 6 2 9 2H16C19 2 21 4 21 7V17C21 20 19 22 16 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 15H21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12H8" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9.5H8" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 7H8" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.4945 18.25H16.5035" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
ExternalDriveRounded.displayName = "ExternalDriveRounded";
export const ExternalDriveRoundedMetadata = { 
  id: "external-drive_rounded", 
  baseId: "external-drive", 
  variant: "rounded", 
  name: "External Drive", 
  category: "device", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default ExternalDriveRounded;
