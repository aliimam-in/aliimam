/**
 * Auto-generated logo component: Volume (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixVolumeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixVolumeLogo = React.forwardRef<SVGSVGElement, MixVolumeLogoProps>(
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
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
    </svg>
  )
);

MixVolumeLogo.displayName = "MixVolumeLogo";

export const MixVolumeLogoMetadata = {
  id: "volume",
  baseId: "volume",
  variant: "default",
  name: "Volume",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixVolumeLogo;
