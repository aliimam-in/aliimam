/**
 * Auto-generated logo component: Topology Full Hierarchy Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TopologyFullHierarchyOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TopologyFullHierarchyOutlineLogo = React.forwardRef<SVGSVGElement, TopologyFullHierarchyOutlineLogoProps>(
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
      <path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M6 8v8" />
  <path d="M18 16v-8" />
  <path d="M8 6h8" />
  <path d="M16 18h-8" />
  <path d="M7.5 7.5l3 3" />
  <path d="M13.5 13.5l3 3" />
  <path d="M16.5 7.5l-3 3" />
  <path d="M10.5 13.5l-3 3" />
    </svg>
  )
);

TopologyFullHierarchyOutlineLogo.displayName = "TopologyFullHierarchyOutlineLogo";

export const TopologyFullHierarchyOutlineLogoMetadata = {
  id: "topology-full-hierarchy-outline",
  baseId: "topology-full-hierarchy-outline",
  variant: "default",
  name: "Topology Full Hierarchy Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TopologyFullHierarchyOutlineLogo;
