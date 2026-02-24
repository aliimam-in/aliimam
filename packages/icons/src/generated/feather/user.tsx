/**
 * Auto-generated logo component: User (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserLogo = React.forwardRef<SVGSVGElement, UserLogoProps>(
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
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  )
);

UserLogo.displayName = "UserLogo";

export const UserLogoMetadata = {
  id: "user",
  baseId: "user",
  variant: "default",
  name: "User",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserLogo;
