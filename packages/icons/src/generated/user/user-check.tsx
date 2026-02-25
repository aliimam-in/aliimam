/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserCheck = React.forwardRef<SVGSVGElement, UserCheckProps>(
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
      <path d="m16 11 2 2 4-4" />
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <circle cx="9" cy="7" r="4" />
    </svg>
  )
);
UserCheck.displayName = "UserCheck";
export const UserCheckMetadata = { 
  id: "user-check", 
  baseId: "user-check", 
  variant: "default", 
  name: "User Check", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserCheck;
