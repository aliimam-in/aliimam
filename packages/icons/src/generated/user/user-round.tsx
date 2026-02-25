/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserRoundProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserRound = React.forwardRef<SVGSVGElement, UserRoundProps>(
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
      <circle cx="12" cy="8" r="5" />
  <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  )
);
UserRound.displayName = "UserRound";
export const UserRoundMetadata = { 
  id: "user-round", 
  baseId: "user-round", 
  variant: "default", 
  name: "User Round", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserRound;
