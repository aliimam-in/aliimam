/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface FlashSlashRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const FlashSlashRounded = React.forwardRef<SVGSVGElement, FlashSlashRoundedProps>(
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
      <path d="M9.17999 18.04V20.48C9.17999 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H16.97" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.82 8.84V3.52C14.82 1.84 13.91 1.5 12.8 2.76L5.23 11.36C4.3 12.41 4.69 13.28 6.1 13.28H9.19V14.46" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 2L2 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
FlashSlashRounded.displayName = "FlashSlashRounded";
export const FlashSlashRoundedMetadata = { 
  id: "flash-slash_rounded", 
  baseId: "flash-slash", 
  variant: "rounded", 
  name: "Flash Slash", 
  category: "home", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default FlashSlashRounded;
