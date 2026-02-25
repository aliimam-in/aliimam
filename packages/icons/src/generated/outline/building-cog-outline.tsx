/**
 * Auto-generated logo component: Building Cog Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingCogOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingCogOutlineLogo = React.forwardRef<SVGSVGElement, BuildingCogOutlineLogoProps>(
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
      <path d="M3 21h9" />
  <path d="M9 8h1" />
  <path d="M9 12h1" />
  <path d="M9 16h1" />
  <path d="M14 8h1" />
  <path d="M14 12h1" />
  <path d="M5 21v-16c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586h10c.53 0 1.039 .211 1.414 .586c.375 .375 .586 .884 .586 1.414v7" />
  <path d="M16 18c0 .53 .211 1.039 .586 1.414c.375 .375 .884 .586 1.414 .586c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586c-.53 0 -1.039 .211 -1.414 .586c-.375 .375 -.586 .884 -.586 1.414" />
  <path d="M18 14.5v1.5" />
  <path d="M18 20v1.5" />
  <path d="M21.032 16.25l-1.299 .75" />
  <path d="M16.27 19l-1.3 .75" />
  <path d="M14.97 16.25l1.3 .75" />
  <path d="M19.733 19l1.3 .75" />
    </svg>
  )
);

BuildingCogOutlineLogo.displayName = "BuildingCogOutlineLogo";

export const BuildingCogOutlineLogoMetadata = {
  id: "building-cog-outline",
  baseId: "building-cog-outline",
  variant: "default",
  name: "Building Cog Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingCogOutlineLogo;
