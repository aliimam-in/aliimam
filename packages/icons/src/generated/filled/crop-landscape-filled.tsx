/**
 * Auto-generated logo component: Crop Landscape Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CropLandscapeFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CropLandscapeFilledLogo = React.forwardRef<SVGSVGElement, CropLandscapeFilledLogoProps>(
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
      <path d="M18 5a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z" />
    </svg>
  )
);

CropLandscapeFilledLogo.displayName = "CropLandscapeFilledLogo";

export const CropLandscapeFilledLogoMetadata = {
  id: "crop-landscape-filled",
  baseId: "crop-landscape-filled",
  variant: "default",
  name: "Crop Landscape Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CropLandscapeFilledLogo;
