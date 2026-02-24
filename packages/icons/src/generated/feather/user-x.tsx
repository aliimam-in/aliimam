/**
 * Auto-generated logo component: User X (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserXLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserXLogo = React.forwardRef<SVGSVGElement, UserXLogoProps>(
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/>
    </svg>
  )
);

UserXLogo.displayName = "UserXLogo";

export const UserXLogoMetadata = {
  id: "user-x",
  baseId: "user-x",
  variant: "default",
  name: "User X",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserXLogo;
