/**
 * Auto-generated logo component: Bus Front (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BusFrontLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BusFrontLogo = React.forwardRef<SVGSVGElement, BusFrontLogoProps>(
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
      <path d="M4 6 2 7" />
  <path d="M10 6h4" />
  <path d="m22 7-2-1" />
  <rect width="16" height="16" x="4" y="3" rx="2" />
  <path d="M4 11h16" />
  <path d="M8 15h.01" />
  <path d="M16 15h.01" />
  <path d="M6 19v2" />
  <path d="M18 21v-2" />
    </svg>
  )
);

BusFrontLogo.displayName = "BusFrontLogo";

export const BusFrontLogoMetadata = {
  id: "bus-front",
  baseId: "bus-front",
  variant: "default",
  name: "Bus Front",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BusFrontLogo;
