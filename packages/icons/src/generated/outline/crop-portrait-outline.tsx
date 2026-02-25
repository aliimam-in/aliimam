/**
 * Auto-generated logo component: Crop Portrait Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CropPortraitOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CropPortraitOutlineLogo = React.forwardRef<SVGSVGElement, CropPortraitOutlineLogoProps>(
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
      <path d="M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -12" />
    </svg>
  )
);

CropPortraitOutlineLogo.displayName = "CropPortraitOutlineLogo";

export const CropPortraitOutlineLogoMetadata = {
  id: "crop-portrait-outline",
  baseId: "crop-portrait-outline",
  variant: "default",
  name: "Crop Portrait Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CropPortraitOutlineLogo;
