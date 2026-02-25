/**
 * Auto-generated logo component: Hourglass Empty Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HourglassEmptyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HourglassEmptyOutlineLogo = React.forwardRef<SVGSVGElement, HourglassEmptyOutlineLogoProps>(
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
      <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1" />
  <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1" />
    </svg>
  )
);

HourglassEmptyOutlineLogo.displayName = "HourglassEmptyOutlineLogo";

export const HourglassEmptyOutlineLogoMetadata = {
  id: "hourglass-empty-outline",
  baseId: "hourglass-empty-outline",
  variant: "default",
  name: "Hourglass Empty Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HourglassEmptyOutlineLogo;
