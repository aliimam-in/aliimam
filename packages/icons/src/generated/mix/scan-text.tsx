/**
 * Auto-generated logo component: Scan Text (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScanTextLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScanTextLogo = React.forwardRef<SVGSVGElement, ScanTextLogoProps>(
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
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
  <path d="M17 3h2a2 2 0 0 1 2 2v2" />
  <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
  <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  <path d="M7 8h8" />
  <path d="M7 12h10" />
  <path d="M7 16h6" />
    </svg>
  )
);

ScanTextLogo.displayName = "ScanTextLogo";

export const ScanTextLogoMetadata = {
  id: "scan-text",
  baseId: "scan-text",
  variant: "default",
  name: "Scan Text",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScanTextLogo;
