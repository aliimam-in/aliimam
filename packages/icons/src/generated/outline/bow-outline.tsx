/**
 * Auto-generated logo component: Bow Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BowOutlineLogo = React.forwardRef<SVGSVGElement, BowOutlineLogoProps>(
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
      <path d="M17 3h4v4" />
  <path d="M21 3l-15 15" />
  <path d="M3 18h3v3" />
  <path d="M16.5 20c1.576 -1.576 2.5 -4.095 2.5 -6.5c0 -4.81 -3.69 -8.5 -8.5 -8.5c-2.415 0 -4.922 .913 -6.5 2.5l12.5 12.5" />
    </svg>
  )
);

BowOutlineLogo.displayName = "BowOutlineLogo";

export const BowOutlineLogoMetadata = {
  id: "bow-outline",
  baseId: "bow-outline",
  variant: "default",
  name: "Bow Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BowOutlineLogo;
