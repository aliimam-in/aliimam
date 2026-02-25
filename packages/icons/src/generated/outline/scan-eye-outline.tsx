/**
 * Auto-generated logo component: Scan Eye Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScanEyeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScanEyeOutlineLogo = React.forwardRef<SVGSVGElement, ScanEyeOutlineLogoProps>(
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
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
  <path d="M7 12c3.333 -4.667 6.667 -4.667 10 0" />
  <path d="M7 12c3.333 4.667 6.667 4.667 10 0" />
  <path d="M12 12h-.01" />
    </svg>
  )
);

ScanEyeOutlineLogo.displayName = "ScanEyeOutlineLogo";

export const ScanEyeOutlineLogoMetadata = {
  id: "scan-eye-outline",
  baseId: "scan-eye-outline",
  variant: "default",
  name: "Scan Eye Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScanEyeOutlineLogo;
