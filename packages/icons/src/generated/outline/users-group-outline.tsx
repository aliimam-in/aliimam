/**
 * Auto-generated logo component: Users Group Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UsersGroupOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UsersGroupOutlineLogo = React.forwardRef<SVGSVGElement, UsersGroupOutlineLogoProps>(
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
      <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
  <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M17 10h2a2 2 0 0 1 2 2v1" />
  <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
    </svg>
  )
);

UsersGroupOutlineLogo.displayName = "UsersGroupOutlineLogo";

export const UsersGroupOutlineLogoMetadata = {
  id: "users-group-outline",
  baseId: "users-group-outline",
  variant: "default",
  name: "Users Group Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UsersGroupOutlineLogo;
