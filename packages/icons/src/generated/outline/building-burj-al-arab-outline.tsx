/**
 * Auto-generated logo component: Building Burj Al Arab Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingBurjAlArabOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingBurjAlArabOutlineLogo = React.forwardRef<SVGSVGElement, BuildingBurjAlArabOutlineLogoProps>(
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
  <path d="M7 21v-18" />
  <path d="M7 4c5.675 .908 10 5.613 10 11.28a11 11 0 0 1 -1.605 5.72" />
  <path d="M5 9h12" />
  <path d="M7 13h4" />
  <path d="M7 17h4" />
    </svg>
  )
);

BuildingBurjAlArabOutlineLogo.displayName = "BuildingBurjAlArabOutlineLogo";

export const BuildingBurjAlArabOutlineLogoMetadata = {
  id: "building-burj-al-arab-outline",
  baseId: "building-burj-al-arab-outline",
  variant: "default",
  name: "Building Burj Al Arab Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingBurjAlArabOutlineLogo;
