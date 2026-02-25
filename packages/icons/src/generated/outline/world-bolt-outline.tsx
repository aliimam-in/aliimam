/**
 * Auto-generated logo component: World Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldBoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldBoltOutlineLogo = React.forwardRef<SVGSVGElement, WorldBoltOutlineLogoProps>(
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
      <path d="M20.985 12.52a9 9 0 1 0 -7.52 8.36" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h10.9" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3c2.313 3.706 3.07 7.856 2.27 12" />
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

WorldBoltOutlineLogo.displayName = "WorldBoltOutlineLogo";

export const WorldBoltOutlineLogoMetadata = {
  id: "world-bolt-outline",
  baseId: "world-bolt-outline",
  variant: "default",
  name: "World Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldBoltOutlineLogo;
