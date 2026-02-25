/**
 * Auto-generated logo component: User Round Key (default)
 * Category: user
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserRoundKeyLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserRoundKeyLogo = React.forwardRef<SVGSVGElement, UserRoundKeyLogoProps>(
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
      <path d="M19 11v6" />
  <path d="M19 13h2" />
  <path d="M2 21a8 8 0 0 1 12.868-6.349" />
  <circle cx="10" cy="8" r="5" />
  <circle cx="19" cy="19" r="2" />
    </svg>
  )
);

UserRoundKeyLogo.displayName = "UserRoundKeyLogo";

export const UserRoundKeyLogoMetadata = {
  id: "user-round-key",
  baseId: "user-round-key",
  variant: "default",
  name: "User Round Key",
  category: "user",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserRoundKeyLogo;
