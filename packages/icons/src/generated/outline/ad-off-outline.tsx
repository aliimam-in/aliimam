/**
 * Auto-generated logo component: Ad Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AdOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AdOffOutlineLogo = React.forwardRef<SVGSVGElement, AdOffOutlineLogoProps>(
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
      <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
  <path d="M7 15v-4a2 2 0 0 1 2 -2m2 2v4" />
  <path d="M7 13h4" />
  <path d="M17 9v4" />
  <path d="M16.115 12.131c.33 .149 .595 .412 .747 .74" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

AdOffOutlineLogo.displayName = "AdOffOutlineLogo";

export const AdOffOutlineLogoMetadata = {
  id: "ad-off-outline",
  baseId: "ad-off-outline",
  variant: "default",
  name: "Ad Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AdOffOutlineLogo;
