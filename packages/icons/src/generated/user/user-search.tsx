/**
 * Auto-generated logo component: User Search (default)
 * Category: user
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserSearchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserSearchLogo = React.forwardRef<SVGSVGElement, UserSearchLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <circle cx="10" cy="7" r="4" />
  <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
  <circle cx="17" cy="17" r="3" />
  <path d="m21 21-1.9-1.9" />
    </svg>
  )
);

UserSearchLogo.displayName = "UserSearchLogo";

export const UserSearchLogoMetadata = {
  id: "user-search",
  baseId: "user-search",
  variant: "default",
  name: "User Search",
  category: "user",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserSearchLogo;
