/**
 * Auto-generated logo component: Scan Position Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScanPositionOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScanPositionOutlineLogo = React.forwardRef<SVGSVGElement, ScanPositionOutlineLogoProps>(
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
      <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
  <path d="M4 17v1a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v1" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
  <path d="M12 17l3 -8l-8 3l3.5 1.5l1.5 3.5" />
    </svg>
  )
);

ScanPositionOutlineLogo.displayName = "ScanPositionOutlineLogo";

export const ScanPositionOutlineLogoMetadata = {
  id: "scan-position-outline",
  baseId: "scan-position-outline",
  variant: "default",
  name: "Scan Position Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScanPositionOutlineLogo;
