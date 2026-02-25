/**
 * Auto-generated logo component: Bowl Spoon Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BowlSpoonOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BowlSpoonOutlineLogo = React.forwardRef<SVGSVGElement, BowlSpoonOutlineLogoProps>(
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
      <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1" />
  <path d="M8 7c1.657 0 3 -.895 3 -2s-1.343 -2 -3 -2s-3 .895 -3 2s1.343 2 3 2" />
  <path d="M11 5h9" />
    </svg>
  )
);

BowlSpoonOutlineLogo.displayName = "BowlSpoonOutlineLogo";

export const BowlSpoonOutlineLogoMetadata = {
  id: "bowl-spoon-outline",
  baseId: "bowl-spoon-outline",
  variant: "default",
  name: "Bowl Spoon Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BowlSpoonOutlineLogo;
