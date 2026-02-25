/**
 * Auto-generated logo component: Building Factory Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingFactoryOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingFactoryOutlineLogo = React.forwardRef<SVGSVGElement, BuildingFactoryOutlineLogoProps>(
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
      <path d="M4 21c1.147 -4.02 1.983 -8.027 2 -12h6c.017 3.973 .853 7.98 2 12" />
  <path d="M12.5 13h4.5c.025 2.612 .894 5.296 2 8" />
  <path d="M9 5a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1" />
  <path d="M3 21l19 0" />
    </svg>
  )
);

BuildingFactoryOutlineLogo.displayName = "BuildingFactoryOutlineLogo";

export const BuildingFactoryOutlineLogoMetadata = {
  id: "building-factory-outline",
  baseId: "building-factory-outline",
  variant: "default",
  name: "Building Factory Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingFactoryOutlineLogo;
