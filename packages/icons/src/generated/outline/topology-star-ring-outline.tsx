/**
 * Auto-generated logo component: Topology Star Ring Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TopologyStarRingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TopologyStarRingOutlineLogo = React.forwardRef<SVGSVGElement, TopologyStarRingOutlineLogoProps>(
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
      <path d="M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M6 12h4" />
  <path d="M14 12h4" />
  <path d="M13.5 5.5l5 5" />
  <path d="M5.5 13.5l5 5" />
  <path d="M13.5 18.5l5 -5" />
  <path d="M10.5 5.5l-5 5" />
  <path d="M12 6v4" />
  <path d="M12 14v4" />
    </svg>
  )
);

TopologyStarRingOutlineLogo.displayName = "TopologyStarRingOutlineLogo";

export const TopologyStarRingOutlineLogoMetadata = {
  id: "topology-star-ring-outline",
  baseId: "topology-star-ring-outline",
  variant: "default",
  name: "Topology Star Ring Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TopologyStarRingOutlineLogo;
