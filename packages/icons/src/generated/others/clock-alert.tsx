/**
 * Auto-generated logo component: Clock Alert (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockAlertLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockAlertLogo = React.forwardRef<SVGSVGElement, ClockAlertLogoProps>(
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
      <path d="M12 6v6l4 2" />
  <path d="M20 12v5" />
  <path d="M20 21h.01" />
  <path d="M21.25 8.2A10 10 0 1 0 16 21.16" />
    </svg>
  )
);

ClockAlertLogo.displayName = "ClockAlertLogo";

export const ClockAlertLogoMetadata = {
  id: "clock-alert",
  baseId: "clock-alert",
  variant: "default",
  name: "Clock Alert",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockAlertLogo;
