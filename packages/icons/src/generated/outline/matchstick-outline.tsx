/**
 * Auto-generated logo component: Matchstick Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MatchstickOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MatchstickOutlineLogo = React.forwardRef<SVGSVGElement, MatchstickOutlineLogoProps>(
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
      <path d="M3 21l14 -9" />
  <path d="M16 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M17 3l3.62 7.29a4.007 4.007 0 0 1 -.764 4.51a4 4 0 0 1 -6.493 -4.464l3.637 -7.336" />
    </svg>
  )
);

MatchstickOutlineLogo.displayName = "MatchstickOutlineLogo";

export const MatchstickOutlineLogoMetadata = {
  id: "matchstick-outline",
  baseId: "matchstick-outline",
  variant: "default",
  name: "Matchstick Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MatchstickOutlineLogo;
