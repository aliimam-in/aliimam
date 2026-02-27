/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserAddFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserAddFilled = React.forwardRef<SVGSVGElement, UserAddFilledProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size} 
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M11.9999 15C6.98991 15 2.90991 18.36 2.90991 22.5C2.90991 22.78 3.12991 23 3.40991 23H20.5899C20.8699 23 21.0899 22.78 21.0899 22.5C21.0899 18.36 17.0099 15 11.9999 15Z" fill="currentColor"/>
<path d="M15.71 3.66C14.81 2.64 13.47 2 12 2C10.6 2 9.32 2.57 8.41 3.51C7.54 4.41 7 5.65 7 7C7 7.94 7.26 8.82 7.73 9.57C7.98 10 8.3 10.39 8.68 10.71C9.55 11.51 10.71 12 12 12C13.83 12 15.41 11.02 16.28 9.57C16.54 9.14 16.74 8.66 16.85 8.16C16.95 7.79 17 7.4 17 7C17 5.72 16.51 4.55 15.71 3.66ZM13.87 7.92H12.94V8.89C12.94 9.41 12.52 9.83 12 9.83C11.48 9.83 11.06 9.41 11.06 8.89V7.92H10.13C9.61 7.92 9.19 7.5 9.19 6.98C9.19 6.46 9.61 6.04 10.13 6.04H11.06V5.15C11.06 4.63 11.48 4.21 12 4.21C12.52 4.21 12.94 4.63 12.94 5.15V6.04H13.87C14.39 6.04 14.81 6.46 14.81 6.98C14.81 7.5 14.39 7.92 13.87 7.92Z" fill="currentColor"/>
    </svg>
  )
);
UserAddFilled.displayName = "UserAddFilled";
export const UserAddFilledMetadata = { 
  id: "user-add_filled", 
  baseId: "user-add", 
  variant: "filled", 
  name: "User Add", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserAddFilled;
