/**
 * Auto-generated logo component: Password Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PasswordOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PasswordOutlineLogo = React.forwardRef<SVGSVGElement, PasswordOutlineLogoProps>(
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
      <path d="M12 10v4" />
  <path d="M10 13l4 -2" />
  <path d="M10 11l4 2" />
  <path d="M5 10v4" />
  <path d="M3 13l4 -2" />
  <path d="M3 11l4 2" />
  <path d="M19 10v4" />
  <path d="M17 13l4 -2" />
  <path d="M17 11l4 2" />
    </svg>
  )
);

PasswordOutlineLogo.displayName = "PasswordOutlineLogo";

export const PasswordOutlineLogoMetadata = {
  id: "password-outline",
  baseId: "password-outline",
  variant: "default",
  name: "Password Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PasswordOutlineLogo;
