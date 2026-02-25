/**
 * Auto-generated logo component: Mood Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MoodPinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MoodPinOutlineLogo = React.forwardRef<SVGSVGElement, MoodPinOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 0 -8.352 8.977" />
  <path d="M9 10h.01" />
  <path d="M15 10h.01" />
  <path d="M9.5 15c.658 .672 1.56 1 2.5 1c.102 0 .203 -.004 .304 -.012" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
    </svg>
  )
);

MoodPinOutlineLogo.displayName = "MoodPinOutlineLogo";

export const MoodPinOutlineLogoMetadata = {
  id: "mood-pin-outline",
  baseId: "mood-pin-outline",
  variant: "default",
  name: "Mood Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MoodPinOutlineLogo;
