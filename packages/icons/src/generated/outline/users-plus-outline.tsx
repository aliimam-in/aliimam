/**
 * Auto-generated logo component: Users Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UsersPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UsersPlusOutlineLogo = React.forwardRef<SVGSVGElement, UsersPlusOutlineLogoProps>(
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
  <path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901" />
  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

UsersPlusOutlineLogo.displayName = "UsersPlusOutlineLogo";

export const UsersPlusOutlineLogoMetadata = {
  id: "users-plus-outline",
  baseId: "users-plus-outline",
  variant: "default",
  name: "Users Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UsersPlusOutlineLogo;
