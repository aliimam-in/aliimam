/**
 * Auto-generated logo component: Clock Play Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockPlayOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockPlayOutlineLogo = React.forwardRef<SVGSVGElement, ClockPlayOutlineLogoProps>(
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
      <path d="M12 7v5l2 2" />
  <path d="M17 22l5 -3l-5 -3l0 6" />
  <path d="M13.017 20.943a9 9 0 1 1 7.831 -7.292" />
    </svg>
  )
);

ClockPlayOutlineLogo.displayName = "ClockPlayOutlineLogo";

export const ClockPlayOutlineLogoMetadata = {
  id: "clock-play-outline",
  baseId: "clock-play-outline",
  variant: "default",
  name: "Clock Play Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockPlayOutlineLogo;
