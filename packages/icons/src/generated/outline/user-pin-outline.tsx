/**
 * Auto-generated logo component: User Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserPinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserPinOutlineLogo = React.forwardRef<SVGSVGElement, UserPinOutlineLogoProps>(
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
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
  <path d="M6 21v-2a4 4 0 0 1 4 -4h2.5" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
    </svg>
  )
);

UserPinOutlineLogo.displayName = "UserPinOutlineLogo";

export const UserPinOutlineLogoMetadata = {
  id: "user-pin-outline",
  baseId: "user-pin-outline",
  variant: "default",
  name: "User Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserPinOutlineLogo;
