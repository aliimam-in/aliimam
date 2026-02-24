/**
 * Auto-generated logo component: User Check (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserCheckLogo = React.forwardRef<SVGSVGElement, UserCheckLogoProps>(
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>
    </svg>
  )
);

UserCheckLogo.displayName = "UserCheckLogo";

export const UserCheckLogoMetadata = {
  id: "user-check",
  baseId: "user-check",
  variant: "default",
  name: "User Check",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserCheckLogo;
