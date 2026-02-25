/**
 * Auto-generated logo component: Topology Bus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TopologyBusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TopologyBusOutlineLogo = React.forwardRef<SVGSVGElement, TopologyBusOutlineLogoProps>(
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
      <path d="M14 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M6 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M22 10a2 2 0 1 0 -4 0a2 2 0 0 0 4 0" />
  <path d="M2 16h20" />
  <path d="M4 12v4" />
  <path d="M12 12v4" />
  <path d="M20 12v4" />
    </svg>
  )
);

TopologyBusOutlineLogo.displayName = "TopologyBusOutlineLogo";

export const TopologyBusOutlineLogoMetadata = {
  id: "topology-bus-outline",
  baseId: "topology-bus-outline",
  variant: "default",
  name: "Topology Bus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TopologyBusOutlineLogo;
