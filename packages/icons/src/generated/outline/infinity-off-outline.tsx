/**
 * Auto-generated logo component: Infinity Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface InfinityOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const InfinityOffOutlineLogo = React.forwardRef<SVGSVGElement, InfinityOffOutlineLogoProps>(
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
      <path d="M8.165 8.174a4 4 0 0 0 -5.166 3.826a4 4 0 0 0 6.829 2.828a10 10 0 0 0 2.172 -2.828m1.677 -2.347a10 10 0 0 1 .495 -.481a4 4 0 1 1 5.129 6.1m-3.521 .537a4 4 0 0 1 -1.608 -.981a10 10 0 0 1 -2.172 -2.828" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

InfinityOffOutlineLogo.displayName = "InfinityOffOutlineLogo";

export const InfinityOffOutlineLogoMetadata = {
  id: "infinity-off-outline",
  baseId: "infinity-off-outline",
  variant: "default",
  name: "Infinity Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default InfinityOffOutlineLogo;
