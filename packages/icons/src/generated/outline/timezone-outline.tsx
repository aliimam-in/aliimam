/**
 * Auto-generated logo component: Timezone Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TimezoneOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TimezoneOutlineLogo = React.forwardRef<SVGSVGElement, TimezoneOutlineLogoProps>(
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
      <path d="M20.884 10.554a9 9 0 1 0 -10.337 10.328" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h6.9" />
  <path d="M11.5 3a17 17 0 0 0 -1.502 14.954" />
  <path d="M12.5 3a17 17 0 0 1 2.52 7.603" />
  <path d="M14 18a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M18 16.5v1.5l.5 .5" />
    </svg>
  )
);

TimezoneOutlineLogo.displayName = "TimezoneOutlineLogo";

export const TimezoneOutlineLogoMetadata = {
  id: "timezone-outline",
  baseId: "timezone-outline",
  variant: "default",
  name: "Timezone Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TimezoneOutlineLogo;
