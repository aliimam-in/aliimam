/**
 * Auto-generated logo component: Hourglass Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HourglassOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HourglassOutlineLogo = React.forwardRef<SVGSVGElement, HourglassOutlineLogoProps>(
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
      <path d="M6.5 7h11" />
  <path d="M6.5 17h11" />
  <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1" />
  <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1" />
    </svg>
  )
);

HourglassOutlineLogo.displayName = "HourglassOutlineLogo";

export const HourglassOutlineLogoMetadata = {
  id: "hourglass-outline",
  baseId: "hourglass-outline",
  variant: "default",
  name: "Hourglass Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HourglassOutlineLogo;
