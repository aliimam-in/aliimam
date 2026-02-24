/**
 * Auto-generated logo component: Between Vertical Start (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BetweenVerticalStartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BetweenVerticalStartLogo = React.forwardRef<SVGSVGElement, BetweenVerticalStartLogoProps>(
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
      <rect width="7" height="13" x="3" y="8" rx="1" />
  <path d="m15 2-3 3-3-3" />
  <rect width="7" height="13" x="14" y="8" rx="1" />
    </svg>
  )
);

BetweenVerticalStartLogo.displayName = "BetweenVerticalStartLogo";

export const BetweenVerticalStartLogoMetadata = {
  id: "between-vertical-start",
  baseId: "between-vertical-start",
  variant: "default",
  name: "Between Vertical Start",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BetweenVerticalStartLogo;
