/**
 * Auto-generated logo component: Hourglass Low Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HourglassLowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HourglassLowOutlineLogo = React.forwardRef<SVGSVGElement, HourglassLowOutlineLogoProps>(
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
      <path d="M6.5 17h11" />
  <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1" />
  <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1" />
    </svg>
  )
);

HourglassLowOutlineLogo.displayName = "HourglassLowOutlineLogo";

export const HourglassLowOutlineLogoMetadata = {
  id: "hourglass-low-outline",
  baseId: "hourglass-low-outline",
  variant: "default",
  name: "Hourglass Low Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HourglassLowOutlineLogo;
