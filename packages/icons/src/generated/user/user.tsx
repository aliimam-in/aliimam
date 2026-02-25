/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const User = React.forwardRef<SVGSVGElement, UserProps>(
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
  <circle cx="12" cy="7" r="4" />
    </svg>
  )
);
User.displayName = "User";
export const UserMetadata = { 
  id: "user", 
  baseId: "user", 
  variant: "default", 
  name: "User", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default User;
