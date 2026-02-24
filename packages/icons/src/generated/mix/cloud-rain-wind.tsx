/**
 * Auto-generated logo component: Cloud Rain Wind (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudRainWindLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudRainWindLogo = React.forwardRef<SVGSVGElement, CloudRainWindLogoProps>(
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
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
  <path d="m9.2 22 3-7" />
  <path d="m9 13-3 7" />
  <path d="m17 13-3 7" />
    </svg>
  )
);

CloudRainWindLogo.displayName = "CloudRainWindLogo";

export const CloudRainWindLogoMetadata = {
  id: "cloud-rain-wind",
  baseId: "cloud-rain-wind",
  variant: "default",
  name: "Cloud Rain Wind",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudRainWindLogo;
