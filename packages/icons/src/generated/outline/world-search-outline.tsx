/**
 * Auto-generated logo component: World Search Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WorldSearchOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WorldSearchOutlineLogo = React.forwardRef<SVGSVGElement, WorldSearchOutlineLogoProps>(
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
      <path d="M21 12a9 9 0 1 0 -9 9" />
  <path d="M3.6 9h16.8" />
  <path d="M3.6 15h7.9" />
  <path d="M11.5 3a17 17 0 0 0 0 18" />
  <path d="M12.5 3a16.984 16.984 0 0 1 2.574 8.62" />
  <path d="M15 18a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M20.2 20.2l1.8 1.8" />
    </svg>
  )
);

WorldSearchOutlineLogo.displayName = "WorldSearchOutlineLogo";

export const WorldSearchOutlineLogoMetadata = {
  id: "world-search-outline",
  baseId: "world-search-outline",
  variant: "default",
  name: "World Search Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WorldSearchOutlineLogo;
