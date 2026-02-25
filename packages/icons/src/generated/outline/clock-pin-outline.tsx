/**
 * Auto-generated logo component: Clock Pin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockPinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockPinOutlineLogo = React.forwardRef<SVGSVGElement, ClockPinOutlineLogoProps>(
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
      <path d="M20.971 11.278a9 9 0 1 0 -8.313 9.698" />
  <path d="M12 7v5l1.5 1.5" />
  <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879" />
  <path d="M19 18v.01" />
    </svg>
  )
);

ClockPinOutlineLogo.displayName = "ClockPinOutlineLogo";

export const ClockPinOutlineLogoMetadata = {
  id: "clock-pin-outline",
  baseId: "clock-pin-outline",
  variant: "default",
  name: "Clock Pin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockPinOutlineLogo;
