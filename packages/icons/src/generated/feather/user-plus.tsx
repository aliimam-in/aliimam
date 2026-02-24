/**
 * Auto-generated logo component: User Plus (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserPlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserPlusLogo = React.forwardRef<SVGSVGElement, UserPlusLogoProps>(
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
    </svg>
  )
);

UserPlusLogo.displayName = "UserPlusLogo";

export const UserPlusLogoMetadata = {
  id: "user-plus",
  baseId: "user-plus",
  variant: "default",
  name: "User Plus",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserPlusLogo;
