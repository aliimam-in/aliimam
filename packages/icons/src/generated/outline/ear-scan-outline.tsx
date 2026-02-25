/**
 * Auto-generated logo component: Ear Scan Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EarScanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EarScanOutlineLogo = React.forwardRef<SVGSVGElement, EarScanOutlineLogoProps>(
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
      <path d="M15 15a2 2 0 0 1 -2 2c-.732 0 -1.555 -.247 -1.72 -.98c-.634 -2.8 -3.17 -2.628 -3.28 -5.02v-.5a3.5 3.5 0 0 1 6.671 -1.483" />
  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  <path d="M13 12v.01" />
    </svg>
  )
);

EarScanOutlineLogo.displayName = "EarScanOutlineLogo";

export const EarScanOutlineLogoMetadata = {
  id: "ear-scan-outline",
  baseId: "ear-scan-outline",
  variant: "default",
  name: "Ear Scan Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EarScanOutlineLogo;
