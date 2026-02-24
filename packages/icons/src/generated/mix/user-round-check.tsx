/**
 * Auto-generated logo component: User Round Check (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserRoundCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserRoundCheckLogo = React.forwardRef<SVGSVGElement, UserRoundCheckLogoProps>(
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
      <path d="M2 21a8 8 0 0 1 13.292-6" />
  <circle cx="10" cy="8" r="5" />
  <path d="m16 19 2 2 4-4" />
    </svg>
  )
);

UserRoundCheckLogo.displayName = "UserRoundCheckLogo";

export const UserRoundCheckLogoMetadata = {
  id: "user-round-check",
  baseId: "user-round-check",
  variant: "default",
  name: "User Round Check",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserRoundCheckLogo;
