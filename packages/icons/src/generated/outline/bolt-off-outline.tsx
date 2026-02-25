/**
 * Auto-generated logo component: Bolt Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BoltOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BoltOffOutlineLogo = React.forwardRef<SVGSVGElement, BoltOffOutlineLogoProps>(
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
      <path d="M3 3l18 18" />
  <path d="M15.212 15.21l-4.212 5.79v-7h-6l3.79 -5.21m1.685 -2.32l2.525 -3.47v6m1 1h5l-2.104 2.893" />
    </svg>
  )
);

BoltOffOutlineLogo.displayName = "BoltOffOutlineLogo";

export const BoltOffOutlineLogoMetadata = {
  id: "bolt-off-outline",
  baseId: "bolt-off-outline",
  variant: "default",
  name: "Bolt Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BoltOffOutlineLogo;
