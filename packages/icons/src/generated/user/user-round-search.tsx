/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface UserRoundSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const UserRoundSearch = React.forwardRef<SVGSVGElement, UserRoundSearchProps>(
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
      <circle cx="10" cy="8" r="5" />
  <path d="M2 21a8 8 0 0 1 10.434-7.62" />
  <circle cx="18" cy="18" r="3" />
  <path d="m22 22-1.9-1.9" />
    </svg>
  )
);
UserRoundSearch.displayName = "UserRoundSearch";
export const UserRoundSearchMetadata = { 
  id: "user-round-search", 
  baseId: "user-round-search", 
  variant: "default", 
  name: "User Round Search", 
  category: "user", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default UserRoundSearch;
