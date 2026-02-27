/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserOctagonRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserOctagonRounded = React.forwardRef<SVGSVGElement, UserOctagonRoundedProps>(
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
      <path d="M21.0799 8.58003V15.42C21.0799 16.54 20.4799 17.58 19.5099 18.15L13.5699 21.58C12.5999 22.14 11.3999 22.14 10.4199 21.58L4.47991 18.15C3.50991 17.59 2.90991 16.55 2.90991 15.42V8.58003C2.90991 7.46003 3.50991 6.41999 4.47991 5.84999L10.4199 2.42C11.3899 1.86 12.5899 1.86 13.5699 2.42L19.5099 5.84999C20.4799 6.41999 21.0799 7.45003 21.0799 8.58003Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9999 11C13.2867 11 14.3299 9.95681 14.3299 8.66998C14.3299 7.38316 13.2867 6.34003 11.9999 6.34003C10.7131 6.34003 9.66992 7.38316 9.66992 8.66998C9.66992 9.95681 10.7131 11 11.9999 11Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 16.66C16 14.86 14.21 13.4 12 13.4C9.79 13.4 8 14.86 8 16.66" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
UserOctagonRounded.displayName = "UserOctagonRounded";
export const UserOctagonRoundedMetadata = { 
  id: "user-octagon_rounded", 
  baseId: "user-octagon", 
  variant: "rounded", 
  name: "User Octagon", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserOctagonRounded;
