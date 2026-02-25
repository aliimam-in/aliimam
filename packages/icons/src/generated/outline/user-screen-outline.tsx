/**
 * Auto-generated logo component: User Screen Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserScreenOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserScreenOutlineLogo = React.forwardRef<SVGSVGElement, UserScreenOutlineLogoProps>(
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
      <path d="M19.03 17.818a3 3 0 0 0 1.97 -2.818v-8a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3v8c0 1.317 .85 2.436 2.03 2.84" />
  <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M8 21a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2" />
    </svg>
  )
);

UserScreenOutlineLogo.displayName = "UserScreenOutlineLogo";

export const UserScreenOutlineLogoMetadata = {
  id: "user-screen-outline",
  baseId: "user-screen-outline",
  variant: "default",
  name: "User Screen Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserScreenOutlineLogo;
