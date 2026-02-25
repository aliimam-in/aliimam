/**
 * Auto-generated logo component: Clock Hour 5 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockHour5OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockHour5OutlineLogo = React.forwardRef<SVGSVGElement, ClockHour5OutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 12l2 3" />
  <path d="M12 7v5" />
    </svg>
  )
);

ClockHour5OutlineLogo.displayName = "ClockHour5OutlineLogo";

export const ClockHour5OutlineLogoMetadata = {
  id: "clock-hour-5-outline",
  baseId: "clock-hour-5-outline",
  variant: "default",
  name: "Clock Hour 5 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockHour5OutlineLogo;
