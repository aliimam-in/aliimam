/**
 * Auto-generated logo component: Body Scan Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BodyScanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BodyScanOutlineLogo = React.forwardRef<SVGSVGElement, BodyScanOutlineLogoProps>(
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
  <path d="M11 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M10 17v-1a2 2 0 1 1 4 0v1" />
  <path d="M8 10c.666 .666 1.334 1 2 1h4c.666 0 1.334 -.334 2 -1" />
  <path d="M12 11v3" />
    </svg>
  )
);

BodyScanOutlineLogo.displayName = "BodyScanOutlineLogo";

export const BodyScanOutlineLogoMetadata = {
  id: "body-scan-outline",
  baseId: "body-scan-outline",
  variant: "default",
  name: "Body Scan Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BodyScanOutlineLogo;
