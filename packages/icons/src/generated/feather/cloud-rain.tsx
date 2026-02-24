/**
 * Auto-generated logo component: Cloud Rain (default)
 * Category: feather
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
      <line x1="16" y1="13" x2="16" y2="21"/><line x1="8" y1="13" x2="8" y2="21"/><line x1="12" y1="15" x2="12" y2="23"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>
    </svg>
  )
);

CloudRainLogo.displayName = "CloudRainLogo";

export const CloudRainLogoMetadata = {
  id: "cloud-rain",
  baseId: "cloud-rain",
  variant: "default",
  name: "Cloud Rain",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudRainLogo;
