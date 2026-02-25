/**
 * Auto-generated logo component: Cloud Sun (default)
 * Category: cloud
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudSunLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudSunLogo = React.forwardRef<SVGSVGElement, CloudSunLogoProps>(
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
  <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
    </svg>
  )
);

CloudSunLogo.displayName = "CloudSunLogo";

export const CloudSunLogoMetadata = {
  id: "cloud-sun",
  baseId: "cloud-sun",
  variant: "default",
  name: "Cloud Sun",
  category: "cloud",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudSunLogo;
