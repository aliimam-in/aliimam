/**
 * Auto-generated logo component: Cardboards Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CardboardsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CardboardsOffOutlineLogo = React.forwardRef<SVGSVGElement, CardboardsOffOutlineLogoProps>(
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
      <path d="M20.96 16.953c.026 -.147 .04 -.298 .04 -.453v-8.5a2 2 0 0 0 -2 -2h-9m-4 0h-1a2 2 0 0 0 -2 2v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06c.155 0 .307 -.014 .454 -.041" />
  <path d="M7 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M16.714 12.7a1 1 0 0 0 -1.417 -1.411l1.417 1.41" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

CardboardsOffOutlineLogo.displayName = "CardboardsOffOutlineLogo";

export const CardboardsOffOutlineLogoMetadata = {
  id: "cardboards-off-outline",
  baseId: "cardboards-off-outline",
  variant: "default",
  name: "Cardboards Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CardboardsOffOutlineLogo;
