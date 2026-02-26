/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserRoundKeyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserRoundKey = React.forwardRef<SVGSVGElement, UserRoundKeyProps>(
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
      <path d="M19 11v6" />
  <path d="M19 13h2" />
  <path d="M2 21a8 8 0 0 1 12.868-6.349" />
  <circle cx="10" cy="8" r="5" />
  <circle cx="19" cy="19" r="2" />
    </svg>
  )
);
UserRoundKey.displayName = "UserRoundKey";
export const UserRoundKeyMetadata = { 
  id: "user-round-key", 
  baseId: "user-round-key", 
  variant: "default", 
  name: "User Round Key", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserRoundKey;
