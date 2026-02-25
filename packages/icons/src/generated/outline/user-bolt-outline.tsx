/**
 * Auto-generated logo component: User Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserBoltOutlineLogo = React.forwardRef<SVGSVGElement, UserBoltOutlineLogoProps>(
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
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.267 0 .529 .026 .781 .076" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

UserBoltOutlineLogo.displayName = "UserBoltOutlineLogo";

export const UserBoltOutlineLogoMetadata = {
  id: "user-bolt-outline",
  baseId: "user-bolt-outline",
  variant: "default",
  name: "User Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserBoltOutlineLogo;
