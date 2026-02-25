/**
 * Auto-generated logo component: Clock Check (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockCheckLogo = React.forwardRef<SVGSVGElement, ClockCheckLogoProps>(
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
  <path d="M22 12a10 10 0 1 0-11 9.95" />
  <path d="m22 16-5.5 5.5L14 19" />
    </svg>
  )
);

ClockCheckLogo.displayName = "ClockCheckLogo";

export const ClockCheckLogoMetadata = {
  id: "clock-check",
  baseId: "clock-check",
  variant: "default",
  name: "Clock Check",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockCheckLogo;
