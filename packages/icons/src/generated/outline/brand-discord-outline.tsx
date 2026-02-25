/**
 * Auto-generated logo component: Brand Discord Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDiscordOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDiscordOutlineLogo = React.forwardRef<SVGSVGElement, BrandDiscordOutlineLogoProps>(
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
      <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
  <path d="M7 16.5c3.5 1 6.5 1 10 0" />
    </svg>
  )
);

BrandDiscordOutlineLogo.displayName = "BrandDiscordOutlineLogo";

export const BrandDiscordOutlineLogoMetadata = {
  id: "brand-discord-outline",
  baseId: "brand-discord-outline",
  variant: "default",
  name: "Brand Discord Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDiscordOutlineLogo;
