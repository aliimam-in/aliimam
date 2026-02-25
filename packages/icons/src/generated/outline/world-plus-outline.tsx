/**
 * Auto-generated logo component: World Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldPlusOutlineLogo = React.forwardRef<SVGSVGElement, WorldPlusOutlineLogoProps>(
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
      <path d="M20.985 12.518a9 9 0 1 0 -8.45 8.466" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h11.4" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a16.998 16.998 0 0 1 2.283 12.157" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

WorldPlusOutlineLogo.displayName = "WorldPlusOutlineLogo";

export const WorldPlusOutlineLogoMetadata = {
  id: "world-plus-outline",
  baseId: "world-plus-outline",
  variant: "default",
  name: "World Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldPlusOutlineLogo;
