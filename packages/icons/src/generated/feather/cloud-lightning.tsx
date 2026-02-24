/**
 * Auto-generated logo component: Cloud Lightning (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudLightningLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudLightningLogo = React.forwardRef<SVGSVGElement, CloudLightningLogoProps>(
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
      <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/><polyline points="13 11 9 17 15 17 11 23"/>
    </svg>
  )
);

CloudLightningLogo.displayName = "CloudLightningLogo";

export const CloudLightningLogoMetadata = {
  id: "cloud-lightning",
  baseId: "cloud-lightning",
  variant: "default",
  name: "Cloud Lightning",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudLightningLogo;
