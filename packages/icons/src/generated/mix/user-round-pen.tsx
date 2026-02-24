/**
 * Auto-generated logo component: User Round Pen (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserRoundPenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserRoundPenLogo = React.forwardRef<SVGSVGElement, UserRoundPenLogoProps>(
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
      <path d="M2 21a8 8 0 0 1 10.821-7.487" />
  <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
  <circle cx="10" cy="8" r="5" />
    </svg>
  )
);

UserRoundPenLogo.displayName = "UserRoundPenLogo";

export const UserRoundPenLogoMetadata = {
  id: "user-round-pen",
  baseId: "user-round-pen",
  variant: "default",
  name: "User Round Pen",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserRoundPenLogo;
