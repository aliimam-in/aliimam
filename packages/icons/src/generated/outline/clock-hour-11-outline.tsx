/**
 * Auto-generated logo component: Clock Hour 11 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockHour11OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockHour11OutlineLogo = React.forwardRef<SVGSVGElement, ClockHour11OutlineLogoProps>(
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
  <path d="M12 12l-2 -3" />
  <path d="M12 7v5" />
    </svg>
  )
);

ClockHour11OutlineLogo.displayName = "ClockHour11OutlineLogo";

export const ClockHour11OutlineLogoMetadata = {
  id: "clock-hour-11-outline",
  baseId: "clock-hour-11-outline",
  variant: "default",
  name: "Clock Hour 11 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockHour11OutlineLogo;
