/**
 * Auto-generated logo component: Crop (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CropLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CropLogo = React.forwardRef<SVGSVGElement, CropLogoProps>(
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
      <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"/><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"/>
    </svg>
  )
);

CropLogo.displayName = "CropLogo";

export const CropLogoMetadata = {
  id: "crop",
  baseId: "crop",
  variant: "default",
  name: "Crop",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CropLogo;
