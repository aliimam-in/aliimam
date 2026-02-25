/**
 * Auto-generated logo component: Beer Off (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BeerOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BeerOffLogo = React.forwardRef<SVGSVGElement, BeerOffLogoProps>(
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
      <path d="M13 13v5" />
  <path d="M17 11.47V8" />
  <path d="M17 11h1a3 3 0 0 1 2.745 4.211" />
  <path d="m2 2 20 20" />
  <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" />
  <path d="M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" />
  <path d="M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12" />
  <path d="M9 14.6V18" />
    </svg>
  )
);

BeerOffLogo.displayName = "BeerOffLogo";

export const BeerOffLogoMetadata = {
  id: "beer-off",
  baseId: "beer-off",
  variant: "default",
  name: "Beer Off",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BeerOffLogo;
