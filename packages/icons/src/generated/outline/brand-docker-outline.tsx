/**
 * Auto-generated logo component: Brand Docker Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandDockerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandDockerOutlineLogo = React.forwardRef<SVGSVGElement, BrandDockerOutlineLogoProps>(
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
      <path d="M22 12.54c-1.804 -.345 -2.701 -1.08 -3.523 -2.94c-.487 .696 -1.102 1.568 -.92 2.4c.028 .238 -.32 1 -.557 1h-14c0 5.208 3.164 7 6.196 7c4.124 .022 7.828 -1.376 9.854 -5c1.146 -.101 2.296 -1.505 2.95 -2.46" />
  <path d="M5 10h3v3h-3l0 -3" />
  <path d="M8 10h3v3h-3l0 -3" />
  <path d="M11 10h3v3h-3l0 -3" />
  <path d="M8 7h3v3h-3l0 -3" />
  <path d="M11 7h3v3h-3l0 -3" />
  <path d="M11 4h3v3h-3l0 -3" />
  <path d="M4.571 18c1.5 0 2.047 -.074 2.958 -.78" />
  <path d="M10 16l0 .01" />
    </svg>
  )
);

BrandDockerOutlineLogo.displayName = "BrandDockerOutlineLogo";

export const BrandDockerOutlineLogoMetadata = {
  id: "brand-docker-outline",
  baseId: "brand-docker-outline",
  variant: "default",
  name: "Brand Docker Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandDockerOutlineLogo;
