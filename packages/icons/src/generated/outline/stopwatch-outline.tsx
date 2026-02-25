/**
 * Auto-generated logo component: Stopwatch Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StopwatchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StopwatchOutlineLogo = React.forwardRef<SVGSVGElement, StopwatchOutlineLogoProps>(
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
      <path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0" />
  <path d="M14.5 10.5l-2.5 2.5" />
  <path d="M17 8l1 -1" />
  <path d="M14 3h-4" />
    </svg>
  )
);

StopwatchOutlineLogo.displayName = "StopwatchOutlineLogo";

export const StopwatchOutlineLogoMetadata = {
  id: "stopwatch-outline",
  baseId: "stopwatch-outline",
  variant: "default",
  name: "Stopwatch Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StopwatchOutlineLogo;
