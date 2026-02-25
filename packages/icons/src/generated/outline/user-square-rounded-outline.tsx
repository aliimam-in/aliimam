/**
 * Auto-generated logo component: User Square Rounded Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserSquareRoundedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserSquareRoundedOutlineLogo = React.forwardRef<SVGSVGElement, UserSquareRoundedOutlineLogoProps>(
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
      <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
  <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
    </svg>
  )
);

UserSquareRoundedOutlineLogo.displayName = "UserSquareRoundedOutlineLogo";

export const UserSquareRoundedOutlineLogoMetadata = {
  id: "user-square-rounded-outline",
  baseId: "user-square-rounded-outline",
  variant: "default",
  name: "User Square Rounded Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserSquareRoundedOutlineLogo;
