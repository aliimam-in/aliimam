/**
 * Auto-generated logo component: Bowling Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BowlingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BowlingOutlineLogo = React.forwardRef<SVGSVGElement, BowlingOutlineLogoProps>(
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
      <path d="M7 11v.01" />
  <path d="M11 10v.01" />
  <path d="M10 14v.01" />
  <path d="M11.059 6.07a8 8 0 1 0 .32 15.81" />
  <path d="M15.969 9h4" />
  <path d="M14.969 5c0 1.5 1 2 1 4c0 2.5 -2 4.5 -2 7c0 2.6 1.9 6 1.9 6h4.1s2 -3.4 2 -6c0 -2.5 -2 -4.5 -2 -7c0 -2 1 -2.5 1 -4a3 3 0 1 0 -6 0" />
    </svg>
  )
);

BowlingOutlineLogo.displayName = "BowlingOutlineLogo";

export const BowlingOutlineLogoMetadata = {
  id: "bowling-outline",
  baseId: "bowling-outline",
  variant: "default",
  name: "Bowling Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BowlingOutlineLogo;
