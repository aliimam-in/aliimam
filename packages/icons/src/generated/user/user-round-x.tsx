/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserRoundXProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserRoundX = React.forwardRef<SVGSVGElement, UserRoundXProps>(
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
      <path d="M2 21a8 8 0 0 1 11.873-7" />
  <circle cx="10" cy="8" r="5" />
  <path d="m17 17 5 5" />
  <path d="m22 17-5 5" />
    </svg>
  )
);
UserRoundX.displayName = "UserRoundX";
export const UserRoundXMetadata = { 
  id: "user-round-x", 
  baseId: "user-round-x", 
  variant: "default", 
  name: "User Round X", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserRoundX;
