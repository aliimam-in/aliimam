/**
 * Auto-generated logo component: User Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UserExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UserExclamationOutlineLogo = React.forwardRef<SVGSVGElement, UserExclamationOutlineLogoProps>(
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
  <path d="M6 21v-2a4 4 0 0 1 4 -4h4c.348 0 .686 .045 1.008 .128" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

UserExclamationOutlineLogo.displayName = "UserExclamationOutlineLogo";

export const UserExclamationOutlineLogoMetadata = {
  id: "user-exclamation-outline",
  baseId: "user-exclamation-outline",
  variant: "default",
  name: "User Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UserExclamationOutlineLogo;
