/**
 * Auto-generated logo component: Sphere Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpherePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpherePlusOutlineLogo = React.forwardRef<SVGSVGElement, SpherePlusOutlineLogoProps>(
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
      <path d="M3 12c0 1.657 4.03 3 9 3c1.116 0 2.185 -.068 3.172 -.192m5.724 -2.35a1.1 1.1 0 0 0 .104 -.458" />
  <path d="M20.984 12.546a9 9 0 1 0 -8.442 8.438" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

SpherePlusOutlineLogo.displayName = "SpherePlusOutlineLogo";

export const SpherePlusOutlineLogoMetadata = {
  id: "sphere-plus-outline",
  baseId: "sphere-plus-outline",
  variant: "default",
  name: "Sphere Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpherePlusOutlineLogo;
