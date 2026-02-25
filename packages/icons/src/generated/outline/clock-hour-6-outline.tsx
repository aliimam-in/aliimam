/**
 * Auto-generated logo component: Clock Hour 6 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockHour6OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockHour6OutlineLogo = React.forwardRef<SVGSVGElement, ClockHour6OutlineLogoProps>(
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
  <path d="M12 12v3.5" />
  <path d="M12 7v5" />
    </svg>
  )
);

ClockHour6OutlineLogo.displayName = "ClockHour6OutlineLogo";

export const ClockHour6OutlineLogoMetadata = {
  id: "clock-hour-6-outline",
  baseId: "clock-hour-6-outline",
  variant: "default",
  name: "Clock Hour 6 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockHour6OutlineLogo;
