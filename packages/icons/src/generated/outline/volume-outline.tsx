/**
 * Auto-generated logo component: Volume Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VolumeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VolumeOutlineLogo = React.forwardRef<SVGSVGElement, VolumeOutlineLogoProps>(
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
      <path d="M15 8a5 5 0 0 1 0 8" />
  <path d="M17.7 5a9 9 0 0 1 0 14" />
  <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
    </svg>
  )
);

VolumeOutlineLogo.displayName = "VolumeOutlineLogo";

export const VolumeOutlineLogoMetadata = {
  id: "volume-outline",
  baseId: "volume-outline",
  variant: "default",
  name: "Volume Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VolumeOutlineLogo;
