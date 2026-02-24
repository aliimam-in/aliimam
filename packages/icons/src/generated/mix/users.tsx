/**
 * Auto-generated logo component: Users (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixUsersLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixUsersLogo = React.forwardRef<SVGSVGElement, MixUsersLogoProps>(
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <circle cx="9" cy="7" r="4" />
    </svg>
  )
);

MixUsersLogo.displayName = "MixUsersLogo";

export const MixUsersLogoMetadata = {
  id: "users",
  baseId: "users",
  variant: "default",
  name: "Users",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixUsersLogo;
