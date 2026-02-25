/**
 * Auto-generated logo component: Building Circus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingCircusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingCircusOutlineLogo = React.forwardRef<SVGSVGElement, BuildingCircusOutlineLogoProps>(
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
      <path d="M4 11h16" />
  <path d="M12 6.5c0 1 -5 4.5 -8 4.5" />
  <path d="M12 6.5c0 1 5 4.5 8 4.5" />
  <path d="M6 11c-.333 5.333 -1 8.667 -2 10h4c1 0 4 -4 4 -9v-1" />
  <path d="M18 11c.333 5.333 1 8.667 2 10h-4c-1 0 -4 -4 -4 -9v-1" />
  <path d="M12 7v-4l2 1h-2" />
    </svg>
  )
);

BuildingCircusOutlineLogo.displayName = "BuildingCircusOutlineLogo";

export const BuildingCircusOutlineLogoMetadata = {
  id: "building-circus-outline",
  baseId: "building-circus-outline",
  variant: "default",
  name: "Building Circus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingCircusOutlineLogo;
