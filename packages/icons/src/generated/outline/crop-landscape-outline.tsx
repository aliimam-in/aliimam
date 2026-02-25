/**
 * Auto-generated logo component: Crop Landscape Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CropLandscapeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CropLandscapeOutlineLogo = React.forwardRef<SVGSVGElement, CropLandscapeOutlineLogoProps>(
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
      <path d="M4 8a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -8" />
    </svg>
  )
);

CropLandscapeOutlineLogo.displayName = "CropLandscapeOutlineLogo";

export const CropLandscapeOutlineLogoMetadata = {
  id: "crop-landscape-outline",
  baseId: "crop-landscape-outline",
  variant: "default",
  name: "Crop Landscape Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CropLandscapeOutlineLogo;
