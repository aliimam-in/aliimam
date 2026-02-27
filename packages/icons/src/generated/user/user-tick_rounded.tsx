/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserTickRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserTickRounded = React.forwardRef<SVGSVGElement, UserTickRoundedProps>(
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
      <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.40991 22C3.40991 18.13 7.25991 15 11.9999 15C12.9599 15 13.8899 15.13 14.7599 15.37"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 18C22 18.75 21.79 19.46 21.42 20.06C21.21 20.42 20.94 20.74 20.63 21C19.93 21.63 19.01 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 16.74 14.58 15.61 15.5 14.88C16.19 14.33 17.06 14 18 14C20.21 14 22 15.79 22 18Z"   strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.4399 18L17.4299 18.99L19.5599 17.02"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
UserTickRounded.displayName = "UserTickRounded";
export const UserTickRoundedMetadata = { 
  id: "user-tick_rounded", 
  baseId: "user-tick", 
  variant: "rounded", 
  name: "User Tick", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserTickRounded;
