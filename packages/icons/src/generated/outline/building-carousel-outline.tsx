/**
 * Auto-generated logo component: Building Carousel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingCarouselOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingCarouselOutlineLogo = React.forwardRef<SVGSVGElement, BuildingCarouselOutlineLogoProps>(
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
      <path d="M6 12a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
  <path d="M3 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 8a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 16a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M8 22l4 -10l4 10" />
    </svg>
  )
);

BuildingCarouselOutlineLogo.displayName = "BuildingCarouselOutlineLogo";

export const BuildingCarouselOutlineLogoMetadata = {
  id: "building-carousel-outline",
  baseId: "building-carousel-outline",
  variant: "default",
  name: "Building Carousel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingCarouselOutlineLogo;
