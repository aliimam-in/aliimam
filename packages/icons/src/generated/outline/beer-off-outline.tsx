/**
 * Auto-generated logo component: Beer Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BeerOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BeerOffOutlineLogo = React.forwardRef<SVGSVGElement, BeerOffOutlineLogoProps>(
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
      <path d="M7 7v1.111c0 1.242 .29 2.467 .845 3.578l.31 .622a8 8 0 0 1 .845 3.578v4.111h6v-4.111a8 8 0 0 1 .045 -.85m.953 -3.035l.157 -.315a8 8 0 0 0 .845 -3.578v-4.111h-9" />
  <path d="M7 8h1m4 0h5" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BeerOffOutlineLogo.displayName = "BeerOffOutlineLogo";

export const BeerOffOutlineLogoMetadata = {
  id: "beer-off-outline",
  baseId: "beer-off-outline",
  variant: "default",
  name: "Beer Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BeerOffOutlineLogo;
