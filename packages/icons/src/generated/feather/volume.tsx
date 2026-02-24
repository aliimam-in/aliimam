/**
 * Auto-generated logo component: Volume (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VolumeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VolumeLogo = React.forwardRef<SVGSVGElement, VolumeLogoProps>(
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
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    </svg>
  )
);

VolumeLogo.displayName = "VolumeLogo";

export const VolumeLogoMetadata = {
  id: "volume",
  baseId: "volume",
  variant: "default",
  name: "Volume",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VolumeLogo;
