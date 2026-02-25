/**
 * Auto-generated logo component: Building Factory 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingFactory2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingFactory2OutlineLogo = React.forwardRef<SVGSVGElement, BuildingFactory2OutlineLogoProps>(
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
      <path d="M3 21h18" />
  <path d="M5 21v-12l5 4v-4l5 4h4" />
  <path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
  <path d="M9 17h1" />
  <path d="M14 17h1" />
    </svg>
  )
);

BuildingFactory2OutlineLogo.displayName = "BuildingFactory2OutlineLogo";

export const BuildingFactory2OutlineLogoMetadata = {
  id: "building-factory-2-outline",
  baseId: "building-factory-2-outline",
  variant: "default",
  name: "Building Factory 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingFactory2OutlineLogo;
