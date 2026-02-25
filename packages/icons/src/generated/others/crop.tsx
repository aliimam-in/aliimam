/**
 * Auto-generated logo component: Crop (default)
 * Category: others
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
      <path d="M6 2v14a2 2 0 0 0 2 2h14" />
  <path d="M18 22V8a2 2 0 0 0-2-2H2" />
    </svg>
  )
);

CropLogo.displayName = "CropLogo";

export const CropLogoMetadata = {
  id: "crop",
  baseId: "crop",
  variant: "default",
  name: "Crop",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CropLogo;
