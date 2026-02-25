/**
 * Auto-generated logo component: Lock Star Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LockStarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LockStarOutlineLogo = React.forwardRef<SVGSVGElement, LockStarOutlineLogoProps>(
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
      <path d="M11 21h-4a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h9" />
  <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
  <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138" />
    </svg>
  )
);

LockStarOutlineLogo.displayName = "LockStarOutlineLogo";

export const LockStarOutlineLogoMetadata = {
  id: "lock-star-outline",
  baseId: "lock-star-outline",
  variant: "default",
  name: "Lock Star Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LockStarOutlineLogo;
