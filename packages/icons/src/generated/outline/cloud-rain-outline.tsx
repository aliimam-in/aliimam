/**
 * Auto-generated logo component: Cloud Rain Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudRainOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudRainOutlineLogo = React.forwardRef<SVGSVGElement, CloudRainOutlineLogoProps>(
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
      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
  <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
    </svg>
  )
);

CloudRainOutlineLogo.displayName = "CloudRainOutlineLogo";

export const CloudRainOutlineLogoMetadata = {
  id: "cloud-rain-outline",
  baseId: "cloud-rain-outline",
  variant: "default",
  name: "Cloud Rain Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudRainOutlineLogo;
