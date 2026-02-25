/**
 * Auto-generated logo component: User Pen (default)
 * Category: user
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserPenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserPenLogo = React.forwardRef<SVGSVGElement, UserPenLogoProps>(
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
      <path d="M11.5 15H7a4 4 0 0 0-4 4v2" />
  <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
  <circle cx="10" cy="7" r="4" />
    </svg>
  )
);

UserPenLogo.displayName = "UserPenLogo";

export const UserPenLogoMetadata = {
  id: "user-pen",
  baseId: "user-pen",
  variant: "default",
  name: "User Pen",
  category: "user",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserPenLogo;
