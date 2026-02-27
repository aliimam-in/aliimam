/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface SecurityTimeRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const SecurityTimeRounded = React.forwardRef<SVGSVGElement, SecurityTimeRoundedProps>(
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
      <path d="M10.49 2.23L5.50003 4.1C4.35003 4.53 3.41003 5.89 3.41003 7.12V14.55C3.41003 15.73 4.19005 17.28 5.14005 17.99L9.44003 21.2C10.85 22.26 13.17 22.26 14.58 21.2L18.88 17.99C19.83 17.28 20.61 15.73 20.61 14.55V7.12C20.61 5.89 19.67 4.53 18.52 4.1L13.53 2.23C12.68 1.92 11.32 1.92 10.49 2.23Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15.5C14.2091 15.5 16 13.7091 16 11.5C16 9.29086 14.2091 7.5 12 7.5C9.79086 7.5 8 9.29086 8 11.5C8 13.7091 9.79086 15.5 12 15.5Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.25 10.25V11.18C12.25 11.53 12.07 11.86 11.76 12.04L11 12.5"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
SecurityTimeRounded.displayName = "SecurityTimeRounded";
export const SecurityTimeRoundedMetadata = { 
  id: "security-time_rounded", 
  baseId: "security-time", 
  variant: "rounded", 
  name: "Security Time", 
  category: "calendar", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default SecurityTimeRounded;
