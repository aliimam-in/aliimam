/**
 * Auto-generated logo component: Sphere Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SphereOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SphereOffOutlineLogo = React.forwardRef<SVGSVGElement, SphereOffOutlineLogoProps>(
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
      <path d="M3 12c0 1.657 4.03 3 9 3c.987 0 1.936 -.053 2.825 -.15m3.357 -.67c1.735 -.547 2.818 -1.32 2.818 -2.18" />
  <path d="M20.051 16.027a9 9 0 0 0 -12.083 -12.075m-2.34 1.692a9 9 0 0 0 12.74 12.716" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SphereOffOutlineLogo.displayName = "SphereOffOutlineLogo";

export const SphereOffOutlineLogoMetadata = {
  id: "sphere-off-outline",
  baseId: "sphere-off-outline",
  variant: "default",
  name: "Sphere Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SphereOffOutlineLogo;
