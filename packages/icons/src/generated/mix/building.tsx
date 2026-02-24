/**
 * Auto-generated logo component: Building (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingLogo = React.forwardRef<SVGSVGElement, BuildingLogoProps>(
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
      <path d="M12 10h.01" />
  <path d="M12 14h.01" />
  <path d="M12 6h.01" />
  <path d="M16 10h.01" />
  <path d="M16 14h.01" />
  <path d="M16 6h.01" />
  <path d="M8 10h.01" />
  <path d="M8 14h.01" />
  <path d="M8 6h.01" />
  <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
  <rect x="4" y="2" width="16" height="20" rx="2" />
    </svg>
  )
);

BuildingLogo.displayName = "BuildingLogo";

export const BuildingLogoMetadata = {
  id: "building",
  baseId: "building",
  variant: "default",
  name: "Building",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingLogo;
