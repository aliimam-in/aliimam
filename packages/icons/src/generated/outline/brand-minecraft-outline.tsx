/**
 * Auto-generated logo component: Brand Minecraft Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandMinecraftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandMinecraftOutlineLogo = React.forwardRef<SVGSVGElement, BrandMinecraftOutlineLogoProps>(
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
      <path d="M21 16.008v-8.018a1.98 1.98 0 0 0 -1 -1.717l-7 -4.008a2.016 2.016 0 0 0 -2 0l-7 4.008c-.619 .355 -1 1.01 -1 1.718v8.018c0 .709 .381 1.363 1 1.717l7 4.008c.62 .354 1.38 .354 2 0l7 -4.008c.619 -.355 1 -1.01 1 -1.718" />
  <path d="M12 22v-10" />
  <path d="M12 12l8.73 -5.04" />
  <path d="M3.27 6.96l8.73 5.04" />
  <path d="M12 17l3.003 -1.668m3 -1.667l2.997 -1.665m-9 5l-9 -5" />
  <path d="M15 17l3 -1.67v-3l-3 1.67l0 3" />
    </svg>
  )
);

BrandMinecraftOutlineLogo.displayName = "BrandMinecraftOutlineLogo";

export const BrandMinecraftOutlineLogoMetadata = {
  id: "brand-minecraft-outline",
  baseId: "brand-minecraft-outline",
  variant: "default",
  name: "Brand Minecraft Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandMinecraftOutlineLogo;
