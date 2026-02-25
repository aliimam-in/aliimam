/**
 * Auto-generated logo component: User Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserCheckOutlineLogo = React.forwardRef<SVGSVGElement, UserCheckOutlineLogoProps>(
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
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

UserCheckOutlineLogo.displayName = "UserCheckOutlineLogo";

export const UserCheckOutlineLogoMetadata = {
  id: "user-check-outline",
  baseId: "user-check-outline",
  variant: "default",
  name: "User Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserCheckOutlineLogo;
