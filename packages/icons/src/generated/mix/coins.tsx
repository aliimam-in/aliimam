/**
 * Auto-generated logo component: Coins (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CoinsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CoinsLogo = React.forwardRef<SVGSVGElement, CoinsLogoProps>(
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
      <path d="M13.744 17.736a6 6 0 1 1-7.48-7.48" />
  <path d="M15 6h1v4" />
  <path d="m6.134 14.768.866-.5 2 3.464" />
  <circle cx="16" cy="8" r="6" />
    </svg>
  )
);

CoinsLogo.displayName = "CoinsLogo";

export const CoinsLogoMetadata = {
  id: "coins",
  baseId: "coins",
  variant: "default",
  name: "Coins",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CoinsLogo;
