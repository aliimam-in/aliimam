/**
 * Auto-generated logo component: Clock Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockPauseOutlineLogo = React.forwardRef<SVGSVGElement, ClockPauseOutlineLogoProps>(
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
      <path d="M20.942 13.018a9 9 0 1 0 -7.909 7.922" />
  <path d="M12 7v5l2 2" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

ClockPauseOutlineLogo.displayName = "ClockPauseOutlineLogo";

export const ClockPauseOutlineLogoMetadata = {
  id: "clock-pause-outline",
  baseId: "clock-pause-outline",
  variant: "default",
  name: "Clock Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockPauseOutlineLogo;
