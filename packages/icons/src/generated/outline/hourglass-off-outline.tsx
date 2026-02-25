/**
 * Auto-generated logo component: Hourglass Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HourglassOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HourglassOffOutlineLogo = React.forwardRef<SVGSVGElement, HourglassOffOutlineLogoProps>(
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
      <path d="M18 18v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-2a6 6 0 0 1 6 -6" />
  <path d="M6 6a6 6 0 0 0 6 6m3.13 -.88a6 6 0 0 0 2.87 -5.12v-2a1 1 0 0 0 -1 -1h-10" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HourglassOffOutlineLogo.displayName = "HourglassOffOutlineLogo";

export const HourglassOffOutlineLogoMetadata = {
  id: "hourglass-off-outline",
  baseId: "hourglass-off-outline",
  variant: "default",
  name: "Hourglass Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HourglassOffOutlineLogo;
