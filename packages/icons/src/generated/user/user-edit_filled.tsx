/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserEditFilledProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserEditFilled = React.forwardRef<SVGSVGElement, UserEditFilledProps>(
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
      <path d="M12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7C17 4.24 14.76 2 12 2ZM14.17 6.51L11.47 9.21C11.37 9.31 11.16 9.41 11.02 9.44L9.99 9.58C9.61 9.63 9.35 9.37 9.41 9L9.56 7.97C9.58 7.83 9.68 7.62 9.79 7.52L12.49 4.82C12.95 4.36 13.5 4.14 14.18 4.82C14.85 5.51 14.63 6.05 14.17 6.51Z" fill="currentColor"/>
<path d="M11.9999 14C6.98991 14 2.90991 17.36 2.90991 21.5C2.90991 21.78 3.12991 22 3.40991 22H20.5899C20.8699 22 21.0899 21.78 21.0899 21.5C21.0899 17.36 17.0099 14 11.9999 14Z" fill="currentColor"/>
    </svg>
  )
);
UserEditFilled.displayName = "UserEditFilled";
export const UserEditFilledMetadata = { 
  id: "user-edit_filled", 
  baseId: "user-edit", 
  variant: "filled", 
  name: "User Edit", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserEditFilled;
