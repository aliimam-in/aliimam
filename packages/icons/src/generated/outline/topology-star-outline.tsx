/**
 * Auto-generated logo component: Topology Star Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TopologyStarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TopologyStarOutlineLogo = React.forwardRef<SVGSVGElement, TopologyStarOutlineLogoProps>(
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
      <path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M7.5 7.5l3 3" />
  <path d="M7.5 16.5l3 -3" />
  <path d="M13.5 13.5l3 3" />
  <path d="M16.5 7.5l-3 3" />
    </svg>
  )
);

TopologyStarOutlineLogo.displayName = "TopologyStarOutlineLogo";

export const TopologyStarOutlineLogoMetadata = {
  id: "topology-star-outline",
  baseId: "topology-star-outline",
  variant: "default",
  name: "Topology Star Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TopologyStarOutlineLogo;
