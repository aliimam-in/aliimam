/**
 * Auto-generated logo component: Alarm Snooze Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlarmSnoozeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlarmSnoozeOutlineLogo = React.forwardRef<SVGSVGElement, AlarmSnoozeOutlineLogoProps>(
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
      <path d="M5 13a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M10 11h4l-4 4h4" />
  <path d="M7 4l-2.75 2" />
  <path d="M17 4l2.75 2" />
    </svg>
  )
);

AlarmSnoozeOutlineLogo.displayName = "AlarmSnoozeOutlineLogo";

export const AlarmSnoozeOutlineLogoMetadata = {
  id: "alarm-snooze-outline",
  baseId: "alarm-snooze-outline",
  variant: "default",
  name: "Alarm Snooze Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlarmSnoozeOutlineLogo;
