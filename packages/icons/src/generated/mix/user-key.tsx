/**
 * Auto-generated logo component: User Key (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserKeyLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserKeyLogo = React.forwardRef<SVGSVGElement, UserKeyLogoProps>(
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
      <path d="M20 11v6" />
  <path d="M20 13h2" />
  <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" />
  <circle cx="10" cy="7" r="4" />
  <circle cx="20" cy="19" r="2" />
    </svg>
  )
);

UserKeyLogo.displayName = "UserKeyLogo";

export const UserKeyLogoMetadata = {
  id: "user-key",
  baseId: "user-key",
  variant: "default",
  name: "User Key",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserKeyLogo;
