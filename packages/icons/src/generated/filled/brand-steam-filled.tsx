/**
 * Auto-generated logo component: Brand Steam Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSteamFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSteamFilledLogo = React.forwardRef<SVGSVGElement, BrandSteamFilledLogoProps>(
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
      <path d="M16.5 4a5.5 5.5 0 1 1 -.309 10.992l-.078 -.007l-3.646 2.524l-.011 .094c-.267 1.775 -1.707 3.18 -3.571 3.38l-.209 .017h-.176a4 4 0 0 1 -3.756 -2.623l-.016 -.048l-2.122 -.91a1 1 0 0 1 -.599 -.8l-.007 -.119v-3.5a1 1 0 0 1 1.447 -.894l2.964 1.481l.174 -.1a4 4 0 0 1 2.15 -.482l.166 .014l2.126 -2.977l-.01 -.098a5.5 5.5 0 0 1 1.092 -3.758l.169 -.212a5.5 5.5 0 0 1 4.222 -1.974m0 3.5a2 2 0 1 0 0 4a2 2 0 0 0 0 -4" />
    </svg>
  )
);

BrandSteamFilledLogo.displayName = "BrandSteamFilledLogo";

export const BrandSteamFilledLogoMetadata = {
  id: "brand-steam-filled",
  baseId: "brand-steam-filled",
  variant: "default",
  name: "Brand Steam Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSteamFilledLogo;
