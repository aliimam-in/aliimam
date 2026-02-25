/**
 * Auto-generated logo component: Fingerprint Scan Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FingerprintScanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FingerprintScanOutlineLogo = React.forwardRef<SVGSVGElement, FingerprintScanOutlineLogoProps>(
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
      <path d="M9 11a3 3 0 0 1 6 0c0 1.657 .612 3.082 1 4" />
  <path d="M12 11v1.75c-.001 1.11 .661 2.206 1 3.25" />
  <path d="M9 14.25c.068 .58 .358 1.186 .5 1.75" />
  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    </svg>
  )
);

FingerprintScanOutlineLogo.displayName = "FingerprintScanOutlineLogo";

export const FingerprintScanOutlineLogoMetadata = {
  id: "fingerprint-scan-outline",
  baseId: "fingerprint-scan-outline",
  variant: "default",
  name: "Fingerprint Scan Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FingerprintScanOutlineLogo;
