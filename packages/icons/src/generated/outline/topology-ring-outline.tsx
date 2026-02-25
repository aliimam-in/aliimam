/**
 * Auto-generated logo component: Topology Ring Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TopologyRingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TopologyRingOutlineLogo = React.forwardRef<SVGSVGElement, TopologyRingOutlineLogoProps>(
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
  <path d="M13.5 5.5l5 5" />
  <path d="M5.5 13.5l5 5" />
  <path d="M13.5 18.5l5 -5" />
  <path d="M10.5 5.5l-5 5" />
    </svg>
  )
);

TopologyRingOutlineLogo.displayName = "TopologyRingOutlineLogo";

export const TopologyRingOutlineLogoMetadata = {
  id: "topology-ring-outline",
  baseId: "topology-ring-outline",
  variant: "default",
  name: "Topology Ring Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TopologyRingOutlineLogo;
