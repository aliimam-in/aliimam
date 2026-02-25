/**
 * Auto-generated logo component: Password Fingerprint Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PasswordFingerprintOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PasswordFingerprintOutlineLogo = React.forwardRef<SVGSVGElement, PasswordFingerprintOutlineLogoProps>(
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
      <path d="M17 8c.788 1 1 2 1 3v1" />
  <path d="M9 11c0 -1.578 1.343 -3 3 -3s3 1.422 3 3v2" />
  <path d="M12 11v2" />
  <path d="M6 12v-1.397c-.006 -1.999 1.136 -3.849 2.993 -4.85a6.385 6.385 0 0 1 6.007 -.005" />
  <path d="M12 17v4" />
  <path d="M10 20l4 -2" />
  <path d="M10 18l4 2" />
  <path d="M5 17v4" />
  <path d="M3 20l4 -2" />
  <path d="M3 18l4 2" />
  <path d="M19 17v4" />
  <path d="M17 20l4 -2" />
  <path d="M17 18l4 2" />
    </svg>
  )
);

PasswordFingerprintOutlineLogo.displayName = "PasswordFingerprintOutlineLogo";

export const PasswordFingerprintOutlineLogoMetadata = {
  id: "password-fingerprint-outline",
  baseId: "password-fingerprint-outline",
  variant: "default",
  name: "Password Fingerprint Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PasswordFingerprintOutlineLogo;
