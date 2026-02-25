/**
 * Auto-generated logo component: Fingerprint Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FingerprintOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FingerprintOffOutlineLogo = React.forwardRef<SVGSVGElement, FingerprintOffOutlineLogoProps>(
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
  <path d="M8 11c0 -.848 .264 -1.634 .713 -2.28m2.4 -1.621a4 4 0 0 1 4.887 3.901l0 1" />
  <path d="M12 12v1a14 14 0 0 0 2.5 8" />
  <path d="M8 15a18 18 0 0 0 1.8 6" />
  <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 1.854 -5.143m2.176 -1.825a8 8 0 0 1 7.97 .018" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FingerprintOffOutlineLogo.displayName = "FingerprintOffOutlineLogo";

export const FingerprintOffOutlineLogoMetadata = {
  id: "fingerprint-off-outline",
  baseId: "fingerprint-off-outline",
  variant: "default",
  name: "Fingerprint Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FingerprintOffOutlineLogo;
