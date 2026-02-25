/**
 * Auto-generated logo component: World Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldPauseOutlineLogo = React.forwardRef<SVGSVGElement, WorldPauseOutlineLogoProps>(
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
      <path d="M20.945 12.997a9 9 0 1 0 -7.928 7.945" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h9.9" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a16.992 16.992 0 0 1 2.51 10.526" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

WorldPauseOutlineLogo.displayName = "WorldPauseOutlineLogo";

export const WorldPauseOutlineLogoMetadata = {
  id: "world-pause-outline",
  baseId: "world-pause-outline",
  variant: "default",
  name: "World Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldPauseOutlineLogo;
