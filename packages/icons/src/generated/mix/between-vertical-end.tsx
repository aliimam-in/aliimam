/**
 * Auto-generated logo component: Between Vertical End (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BetweenVerticalEndLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BetweenVerticalEndLogo = React.forwardRef<SVGSVGElement, BetweenVerticalEndLogoProps>(
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
      <rect width="7" height="13" x="3" y="3" rx="1" />
  <path d="m9 22 3-3 3 3" />
  <rect width="7" height="13" x="14" y="3" rx="1" />
    </svg>
  )
);

BetweenVerticalEndLogo.displayName = "BetweenVerticalEndLogo";

export const BetweenVerticalEndLogoMetadata = {
  id: "between-vertical-end",
  baseId: "between-vertical-end",
  variant: "default",
  name: "Between Vertical End",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BetweenVerticalEndLogo;
