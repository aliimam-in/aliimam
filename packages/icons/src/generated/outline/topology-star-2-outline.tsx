/**
 * Auto-generated logo component: Topology Star 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TopologyStar2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TopologyStar2OutlineLogo = React.forwardRef<SVGSVGElement, TopologyStar2OutlineLogoProps>(
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
  <path d="M12 6v4" />
  <path d="M12 14v4" />
    </svg>
  )
);

TopologyStar2OutlineLogo.displayName = "TopologyStar2OutlineLogo";

export const TopologyStar2OutlineLogoMetadata = {
  id: "topology-star-2-outline",
  baseId: "topology-star-2-outline",
  variant: "default",
  name: "Topology Star 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TopologyStar2OutlineLogo;
