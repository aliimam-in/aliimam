/**
 * Auto-generated logo component: Clock Hour 8 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockHour8OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockHour8OutlineLogo = React.forwardRef<SVGSVGElement, ClockHour8OutlineLogoProps>(
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
  <path d="M12 12l-3 2" />
  <path d="M12 7v5" />
    </svg>
  )
);

ClockHour8OutlineLogo.displayName = "ClockHour8OutlineLogo";

export const ClockHour8OutlineLogoMetadata = {
  id: "clock-hour-8-outline",
  baseId: "clock-hour-8-outline",
  variant: "default",
  name: "Clock Hour 8 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockHour8OutlineLogo;
