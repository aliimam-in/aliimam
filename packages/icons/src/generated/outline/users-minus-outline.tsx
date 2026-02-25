/**
 * Auto-generated logo component: Users Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UsersMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UsersMinusOutlineLogo = React.forwardRef<SVGSVGElement, UsersMinusOutlineLogoProps>(
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
      <path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
  <path d="M3 21v-2a4 4 0 0 1 4 -4h4c.948 0 1.818 .33 2.504 .88" />
  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  <path d="M16 19h6" />
    </svg>
  )
);

UsersMinusOutlineLogo.displayName = "UsersMinusOutlineLogo";

export const UsersMinusOutlineLogoMetadata = {
  id: "users-minus-outline",
  baseId: "users-minus-outline",
  variant: "default",
  name: "Users Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UsersMinusOutlineLogo;
