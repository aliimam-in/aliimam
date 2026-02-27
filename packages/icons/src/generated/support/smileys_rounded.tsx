/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SmileysRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SmileysRounded = React.forwardRef<SVGSVGElement, SmileysRoundedProps>(
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
      <path d="M14 6.19995V10C11.21 10.05 10.05 11.21 10 14H6.2C3.2 14 2 12.8 2 9.80005V6.19995C2 3.19995 3.2 2 6.2 2H9.8C12.8 2 14 3.19995 14 6.19995Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.96 5.86996C6.43 5.50996 5.73 5.50998 5.2 5.88998"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.96 5.86996C10.43 5.50996 9.73 5.50998 9.2 5.88998"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.16 11.42H5.84C5.54 11.42 5.3 11.18 5.3 10.88C5.3 9.39 6.51 8.18005 8 8.18005C8.64 8.18005 9.23 8.40002 9.69 8.77002"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 14.2V17.8C22 20.8 20.8 22 17.8 22H14.2C11.2 22 10 20.8 10 17.8V14C10.05 11.21 11.21 10.05 14 10H17.8C20.8 10 22 11.2 22 14.2Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.96 13.62C14.43 13.98 13.73 13.98 13.2 13.6"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.96 13.62C18.43 13.98 17.73 13.98 17.2 13.6"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.84 16.1801H18.16C18.46 16.1801 18.7 16.42 18.7 16.72C18.7 18.21 17.49 19.42 16 19.42C14.51 19.42 13.3 18.21 13.3 16.72C13.3 16.42 13.54 16.1801 13.84 16.1801Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SmileysRounded.displayName = "SmileysRounded";
export const SmileysRoundedMetadata = { 
  id: "smileys_rounded", 
  baseId: "smileys", 
  variant: "rounded", 
  name: "Smileys", 
  category: "support", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SmileysRounded;
