/**
 * Auto-generated logo component: World Longitude Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldLongitudeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldLongitudeOutlineLogo = React.forwardRef<SVGSVGElement, WorldLongitudeOutlineLogoProps>(
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
  <path d="M11.5 3a11.2 11.2 0 0 0 0 18" />
  <path d="M12.5 3a11.2 11.2 0 0 1 0 18" />
  <path d="M12 3l0 18" />
    </svg>
  )
);

WorldLongitudeOutlineLogo.displayName = "WorldLongitudeOutlineLogo";

export const WorldLongitudeOutlineLogoMetadata = {
  id: "world-longitude-outline",
  baseId: "world-longitude-outline",
  variant: "default",
  name: "World Longitude Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldLongitudeOutlineLogo;
