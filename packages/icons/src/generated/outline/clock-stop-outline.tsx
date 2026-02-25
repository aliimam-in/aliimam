/**
 * Auto-generated logo component: Clock Stop Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockStopOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockStopOutlineLogo = React.forwardRef<SVGSVGElement, ClockStopOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 0 -9 9" />
  <path d="M12 7v5l1 1" />
  <path d="M16 16h6v6h-6l0 -6" />
    </svg>
  )
);

ClockStopOutlineLogo.displayName = "ClockStopOutlineLogo";

export const ClockStopOutlineLogoMetadata = {
  id: "clock-stop-outline",
  baseId: "clock-stop-outline",
  variant: "default",
  name: "Clock Stop Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockStopOutlineLogo;
