/**
 * Auto-generated logo component: Clock Hour 12 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockHour12OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockHour12OutlineLogo = React.forwardRef<SVGSVGElement, ClockHour12OutlineLogoProps>(
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
  <path d="M12 7v5" />
    </svg>
  )
);

ClockHour12OutlineLogo.displayName = "ClockHour12OutlineLogo";

export const ClockHour12OutlineLogoMetadata = {
  id: "clock-hour-12-outline",
  baseId: "clock-hour-12-outline",
  variant: "default",
  name: "Clock Hour 12 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockHour12OutlineLogo;
