/**
 * Auto-generated logo component: Line Scan Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LineScanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LineScanOutlineLogo = React.forwardRef<SVGSVGElement, LineScanOutlineLogoProps>(
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
  <path d="M7 12h10" />
    </svg>
  )
);

LineScanOutlineLogo.displayName = "LineScanOutlineLogo";

export const LineScanOutlineLogoMetadata = {
  id: "line-scan-outline",
  baseId: "line-scan-outline",
  variant: "default",
  name: "Line Scan Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LineScanOutlineLogo;
