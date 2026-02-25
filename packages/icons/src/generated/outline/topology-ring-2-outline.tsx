/**
 * Auto-generated logo component: Topology Ring 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TopologyRing2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TopologyRing2OutlineLogo = React.forwardRef<SVGSVGElement, TopologyRing2OutlineLogoProps>(
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
      <path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M7 18h10" />
  <path d="M18 16l-5 -8" />
  <path d="M11 8l-5 8" />
    </svg>
  )
);

TopologyRing2OutlineLogo.displayName = "TopologyRing2OutlineLogo";

export const TopologyRing2OutlineLogoMetadata = {
  id: "topology-ring-2-outline",
  baseId: "topology-ring-2-outline",
  variant: "default",
  name: "Topology Ring 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TopologyRing2OutlineLogo;
