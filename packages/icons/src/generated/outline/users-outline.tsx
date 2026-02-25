/**
 * Auto-generated logo component: Users Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UsersOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UsersOutlineLogo = React.forwardRef<SVGSVGElement, UsersOutlineLogoProps>(
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
      <path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
    </svg>
  )
);

UsersOutlineLogo.displayName = "UsersOutlineLogo";

export const UsersOutlineLogoMetadata = {
  id: "users-outline",
  baseId: "users-outline",
  variant: "default",
  name: "Users Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UsersOutlineLogo;
