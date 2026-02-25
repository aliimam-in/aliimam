/**
 * Auto-generated logo component: Between Horizontal End (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BetweenHorizontalEndLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BetweenHorizontalEndLogo = React.forwardRef<SVGSVGElement, BetweenHorizontalEndLogoProps>(
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
      <rect width="13" height="7" x="3" y="3" rx="1" />
  <path d="m22 15-3-3 3-3" />
  <rect width="13" height="7" x="3" y="14" rx="1" />
    </svg>
  )
);

BetweenHorizontalEndLogo.displayName = "BetweenHorizontalEndLogo";

export const BetweenHorizontalEndLogoMetadata = {
  id: "between-horizontal-end",
  baseId: "between-horizontal-end",
  variant: "default",
  name: "Between Horizontal End",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BetweenHorizontalEndLogo;
