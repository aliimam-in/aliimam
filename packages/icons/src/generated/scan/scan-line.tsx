/**
 * Auto-generated logo component: Scan Line (default)
 * Category: scan
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScanLineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScanLineLogo = React.forwardRef<SVGSVGElement, ScanLineLogoProps>(
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
  <path d="M7 12h10" />
    </svg>
  )
);

ScanLineLogo.displayName = "ScanLineLogo";

export const ScanLineLogoMetadata = {
  id: "scan-line",
  baseId: "scan-line",
  variant: "default",
  name: "Scan Line",
  category: "scan",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScanLineLogo;
