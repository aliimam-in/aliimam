/**
 * Auto-generated logo component: Brand Teams Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTeamsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTeamsOutlineLogo = React.forwardRef<SVGSVGElement, BrandTeamsOutlineLogoProps>(
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
      <path d="M3 7h10v10h-10l0 -10" />
  <path d="M6 10h4" />
  <path d="M8 10v4" />
  <path d="M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5 -5v-7h-5" />
  <path d="M18 18a4 4 0 0 0 4 -4v-5h-4" />
  <path d="M13.003 8.83a3 3 0 1 0 -1.833 -1.833" />
  <path d="M15.83 8.36a2.5 2.5 0 1 0 .594 -4.117" />
    </svg>
  )
);

BrandTeamsOutlineLogo.displayName = "BrandTeamsOutlineLogo";

export const BrandTeamsOutlineLogoMetadata = {
  id: "brand-teams-outline",
  baseId: "brand-teams-outline",
  variant: "default",
  name: "Brand Teams Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTeamsOutlineLogo;
