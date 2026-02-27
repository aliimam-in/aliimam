/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface LampSlashRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const LampSlashRounded = React.forwardRef<SVGSVGElement, LampSlashRoundedProps>(
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
      <path d="M20.0301 2.47998L4.18005 18.33" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.24996 13.0001C4.82996 12.0301 4.57996 10.9801 4.57996 9.90005C4.57996 4.99005 8.79996 1.12005 13.6 2.17005C15.06 2.49005 16.36 3.27005 17.36 4.35005" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.06 7.30005C20.28 11.18 18.31 15.08 15.52 16.87V18.03C15.52 18.32 15.62 18.99 14.62 18.99H9.42003C8.39003 18.99 8.52003 18.56 8.52003 18.03V16.87C8.04003 16.57 7.59003 16.2 7.16003 15.77" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
LampSlashRounded.displayName = "LampSlashRounded";
export const LampSlashRoundedMetadata = { 
  id: "lamp-slash_rounded", 
  baseId: "lamp-slash", 
  variant: "rounded", 
  name: "Lamp Slash", 
  category: "notification", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default LampSlashRounded;
