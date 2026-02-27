/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserTagRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserTagRounded = React.forwardRef<SVGSVGElement, UserTagRoundedProps>(
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
      <path d="M18 18.86H17.24C16.44 18.86 15.68 19.17 15.12 19.73L13.41 21.42C12.63 22.19 11.36 22.19 10.58 21.42L8.87 19.73C8.31 19.17 7.54 18.86 6.75 18.86H6C4.34 18.86 3 17.53 3 15.89V4.97998C3 3.33998 4.34 2.01001 6 2.01001H18C19.66 2.01001 21 3.33998 21 4.97998V15.89C21 17.52 19.66 18.86 18 18.86Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9999 10C13.2868 10 14.33 8.95681 14.33 7.66998C14.33 6.38316 13.2868 5.34003 11.9999 5.34003C10.7131 5.34003 9.66992 6.38316 9.66992 7.66998C9.66992 8.95681 10.7131 10 11.9999 10Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 15.66C16 13.86 14.21 12.4 12 12.4C9.79 12.4 8 13.86 8 15.66" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
UserTagRounded.displayName = "UserTagRounded";
export const UserTagRoundedMetadata = { 
  id: "user-tag_rounded", 
  baseId: "user-tag", 
  variant: "rounded", 
  name: "User Tag", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserTagRounded;
