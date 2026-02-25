/**
 * Auto-generated logo component: Asset Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AssetOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AssetOutlineLogo = React.forwardRef<SVGSVGElement, AssetOutlineLogoProps>(
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
      <path d="M3 15a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
  <path d="M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M14.218 17.975l6.619 -12.174" />
  <path d="M6.079 9.756l12.217 -6.631" />
  <path d="M7 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

AssetOutlineLogo.displayName = "AssetOutlineLogo";

export const AssetOutlineLogoMetadata = {
  id: "asset-outline",
  baseId: "asset-outline",
  variant: "default",
  name: "Asset Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AssetOutlineLogo;
