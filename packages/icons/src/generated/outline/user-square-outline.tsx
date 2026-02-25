/**
 * Auto-generated logo component: User Square Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserSquareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserSquareOutlineLogo = React.forwardRef<SVGSVGElement, UserSquareOutlineLogoProps>(
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
      <path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" />
  <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14" />
    </svg>
  )
);

UserSquareOutlineLogo.displayName = "UserSquareOutlineLogo";

export const UserSquareOutlineLogoMetadata = {
  id: "user-square-outline",
  baseId: "user-square-outline",
  variant: "default",
  name: "User Square Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserSquareOutlineLogo;
