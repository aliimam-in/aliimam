/**
 * Auto-generated logo component: Password User Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PasswordUserOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PasswordUserOutlineLogo = React.forwardRef<SVGSVGElement, PasswordUserOutlineLogoProps>(
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
      <path d="M12 17v4" />
  <path d="M10 20l4 -2" />
  <path d="M10 18l4 2" />
  <path d="M5 17v4" />
  <path d="M3 20l4 -2" />
  <path d="M3 18l4 2" />
  <path d="M19 17v4" />
  <path d="M17 20l4 -2" />
  <path d="M17 18l4 2" />
  <path d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
  <path d="M7 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2" />
    </svg>
  )
);

PasswordUserOutlineLogo.displayName = "PasswordUserOutlineLogo";

export const PasswordUserOutlineLogoMetadata = {
  id: "password-user-outline",
  baseId: "password-user-outline",
  variant: "default",
  name: "Password User Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PasswordUserOutlineLogo;
