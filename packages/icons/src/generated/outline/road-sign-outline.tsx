/**
 * Auto-generated logo component: Road Sign Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RoadSignOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RoadSignOutlineLogo = React.forwardRef<SVGSVGElement, RoadSignOutlineLogoProps>(
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
      <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0" />
  <path d="M9 14v-2c0 -.59 .414 -1 1 -1h5" />
  <path d="M13 9l2 2l-2 2" />
    </svg>
  )
);

RoadSignOutlineLogo.displayName = "RoadSignOutlineLogo";

export const RoadSignOutlineLogoMetadata = {
  id: "road-sign-outline",
  baseId: "road-sign-outline",
  variant: "default",
  name: "Road Sign Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RoadSignOutlineLogo;
