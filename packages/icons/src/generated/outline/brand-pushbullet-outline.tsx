/**
 * Auto-generated logo component: Brand Pushbullet Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandPushbulletOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandPushbulletOutlineLogo = React.forwardRef<SVGSVGElement, BrandPushbulletOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M11 8v8h2a4 4 0 1 0 0 -8h-2" />
  <path d="M8 8v8" />
    </svg>
  )
);

BrandPushbulletOutlineLogo.displayName = "BrandPushbulletOutlineLogo";

export const BrandPushbulletOutlineLogoMetadata = {
  id: "brand-pushbullet-outline",
  baseId: "brand-pushbullet-outline",
  variant: "default",
  name: "Brand Pushbullet Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandPushbulletOutlineLogo;
