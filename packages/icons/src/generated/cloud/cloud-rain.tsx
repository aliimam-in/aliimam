/**
 * Auto-generated logo component: Cloud Rain (default)
 * Category: cloud
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudRainLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudRainLogo = React.forwardRef<SVGSVGElement, CloudRainLogoProps>(
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
  <path d="M16 14v6" />
  <path d="M8 14v6" />
  <path d="M12 16v6" />
    </svg>
  )
);

CloudRainLogo.displayName = "CloudRainLogo";

export const CloudRainLogoMetadata = {
  id: "cloud-rain",
  baseId: "cloud-rain",
  variant: "default",
  name: "Cloud Rain",
  category: "cloud",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudRainLogo;
