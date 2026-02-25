/**
 * Auto-generated logo component: Clock Arrow Down (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockArrowDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockArrowDownLogo = React.forwardRef<SVGSVGElement, ClockArrowDownLogoProps>(
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
      <path d="M12 6v6l2 1" />
  <path d="M12.337 21.994a10 10 0 1 1 9.588-8.767" />
  <path d="m14 18 4 4 4-4" />
  <path d="M18 14v8" />
    </svg>
  )
);

ClockArrowDownLogo.displayName = "ClockArrowDownLogo";

export const ClockArrowDownLogoMetadata = {
  id: "clock-arrow-down",
  baseId: "clock-arrow-down",
  variant: "default",
  name: "Clock Arrow Down",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockArrowDownLogo;
