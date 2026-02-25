/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserKeyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserKey = React.forwardRef<SVGSVGElement, UserKeyProps>(
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
      <path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" />
    </svg>
  )
);
UserKey.displayName = "UserKey";
export const UserKeyMetadata = { 
  id: "user-key", 
  baseId: "user-key", 
  variant: "default", 
  name: "User Key", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserKey;
