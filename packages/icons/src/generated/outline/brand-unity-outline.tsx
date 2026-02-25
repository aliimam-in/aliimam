/**
 * Auto-generated logo component: Brand Unity Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandUnityOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandUnityOutlineLogo = React.forwardRef<SVGSVGElement, BrandUnityOutlineLogoProps>(
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
      <path d="M14 3l6 4v7" />
  <path d="M18 17l-6 4l-6 -4" />
  <path d="M4 14v-7l6 -4" />
  <path d="M4 7l8 5v9" />
  <path d="M20 7l-8 5" />
    </svg>
  )
);

BrandUnityOutlineLogo.displayName = "BrandUnityOutlineLogo";

export const BrandUnityOutlineLogoMetadata = {
  id: "brand-unity-outline",
  baseId: "brand-unity-outline",
  variant: "default",
  name: "Brand Unity Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandUnityOutlineLogo;
