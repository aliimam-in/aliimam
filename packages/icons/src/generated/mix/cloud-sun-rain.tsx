/**
 * Auto-generated logo component: Cloud Sun Rain (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudSunRainLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudSunRainLogo = React.forwardRef<SVGSVGElement, CloudSunRainLogoProps>(
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
      <path d="M12 2v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="M20 12h2" />
  <path d="m19.07 4.93-1.41 1.41" />
  <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
  <path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
  <path d="M11 20v2" />
  <path d="M7 19v2" />
    </svg>
  )
);

CloudSunRainLogo.displayName = "CloudSunRainLogo";

export const CloudSunRainLogoMetadata = {
  id: "cloud-sun-rain",
  baseId: "cloud-sun-rain",
  variant: "default",
  name: "Cloud Sun Rain",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudSunRainLogo;
