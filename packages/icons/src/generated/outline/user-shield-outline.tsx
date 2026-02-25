/**
 * Auto-generated logo component: User Shield Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserShieldOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserShieldOutlineLogo = React.forwardRef<SVGSVGElement, UserShieldOutlineLogoProps>(
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
      <path d="M6 21v-2a4 4 0 0 1 4 -4h2" />
  <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5" />
  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    </svg>
  )
);

UserShieldOutlineLogo.displayName = "UserShieldOutlineLogo";

export const UserShieldOutlineLogoMetadata = {
  id: "user-shield-outline",
  baseId: "user-shield-outline",
  variant: "default",
  name: "User Shield Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserShieldOutlineLogo;
