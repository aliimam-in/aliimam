/**
 * Auto-generated logo component: Building Lighthouse Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingLighthouseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingLighthouseOutlineLogo = React.forwardRef<SVGSVGElement, BuildingLighthouseOutlineLogoProps>(
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
      <path d="M12 3l2 3l2 15h-8l2 -15l2 -3" />
  <path d="M8 9l8 0" />
  <path d="M3 11l2 -2l-2 -2" />
  <path d="M21 11l-2 -2l2 -2" />
    </svg>
  )
);

BuildingLighthouseOutlineLogo.displayName = "BuildingLighthouseOutlineLogo";

export const BuildingLighthouseOutlineLogoMetadata = {
  id: "building-lighthouse-outline",
  baseId: "building-lighthouse-outline",
  variant: "default",
  name: "Building Lighthouse Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingLighthouseOutlineLogo;
