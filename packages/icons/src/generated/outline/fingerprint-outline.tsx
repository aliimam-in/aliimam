/**
 * Auto-generated logo component: Fingerprint Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FingerprintOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FingerprintOutlineLogo = React.forwardRef<SVGSVGElement, FingerprintOutlineLogoProps>(
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
      <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3" />
  <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6" />
  <path d="M12 11v2a14 14 0 0 0 2.5 8" />
  <path d="M8 15a18 18 0 0 0 1.8 6" />
  <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95" />
    </svg>
  )
);

FingerprintOutlineLogo.displayName = "FingerprintOutlineLogo";

export const FingerprintOutlineLogoMetadata = {
  id: "fingerprint-outline",
  baseId: "fingerprint-outline",
  variant: "default",
  name: "Fingerprint Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FingerprintOutlineLogo;
