/**
 * Auto-generated logo component: User Round Search (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserRoundSearchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserRoundSearchLogo = React.forwardRef<SVGSVGElement, UserRoundSearchLogoProps>(
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
      <circle cx="10" cy="8" r="5" />
  <path d="M2 21a8 8 0 0 1 10.434-7.62" />
  <circle cx="18" cy="18" r="3" />
  <path d="m22 22-1.9-1.9" />
    </svg>
  )
);

UserRoundSearchLogo.displayName = "UserRoundSearchLogo";

export const UserRoundSearchLogoMetadata = {
  id: "user-round-search",
  baseId: "user-round-search",
  variant: "default",
  name: "User Round Search",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserRoundSearchLogo;
