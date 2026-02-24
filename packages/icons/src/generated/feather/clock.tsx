/**
 * Auto-generated logo component: Clock (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ClockLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ClockLogo = React.forwardRef<SVGSVGElement, ClockLogoProps>(
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
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  )
);

ClockLogo.displayName = "ClockLogo";

export const ClockLogoMetadata = {
  id: "clock",
  baseId: "clock",
  variant: "default",
  name: "Clock",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ClockLogo;
