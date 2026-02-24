/**
 * Auto-generated logo component: Crop (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixCropLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixCropLogo = React.forwardRef<SVGSVGElement, MixCropLogoProps>(
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

MixCropLogo.displayName = "MixCropLogo";

export const MixCropLogoMetadata = {
  id: "crop",
  baseId: "crop",
  variant: "default",
  name: "Crop",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixCropLogo;
