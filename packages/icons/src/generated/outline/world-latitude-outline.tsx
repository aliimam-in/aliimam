/**
 * Auto-generated logo component: World Latitude Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldLatitudeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldLatitudeOutlineLogo = React.forwardRef<SVGSVGElement, WorldLatitudeOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M4.6 7l14.8 0" />
  <path d="M3 12l18 0" />
  <path d="M4.6 17l14.8 0" />
    </svg>
  )
);

WorldLatitudeOutlineLogo.displayName = "WorldLatitudeOutlineLogo";

export const WorldLatitudeOutlineLogoMetadata = {
  id: "world-latitude-outline",
  baseId: "world-latitude-outline",
  variant: "default",
  name: "World Latitude Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldLatitudeOutlineLogo;
