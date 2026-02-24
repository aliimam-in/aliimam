/**
 * Auto-generated logo component: Volume X (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface VolumeXLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const VolumeXLogo = React.forwardRef<SVGSVGElement, VolumeXLogoProps>(
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
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  )
);

VolumeXLogo.displayName = "VolumeXLogo";

export const VolumeXLogoMetadata = {
  id: "volume-x",
  baseId: "volume-x",
  variant: "default",
  name: "Volume X",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default VolumeXLogo;
