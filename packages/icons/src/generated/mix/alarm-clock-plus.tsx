/**
 * Auto-generated logo component: Alarm Clock Plus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlarmClockPlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlarmClockPlusLogo = React.forwardRef<SVGSVGElement, AlarmClockPlusLogoProps>(
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
      <circle cx="12" cy="13" r="8" />
  <path d="M5 3 2 6" />
  <path d="m22 6-3-3" />
  <path d="M6.38 18.7 4 21" />
  <path d="M17.64 18.67 20 21" />
  <path d="M12 10v6" />
  <path d="M9 13h6" />
    </svg>
  )
);

AlarmClockPlusLogo.displayName = "AlarmClockPlusLogo";

export const AlarmClockPlusLogoMetadata = {
  id: "alarm-clock-plus",
  baseId: "alarm-clock-plus",
  variant: "default",
  name: "Alarm Clock Plus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlarmClockPlusLogo;
