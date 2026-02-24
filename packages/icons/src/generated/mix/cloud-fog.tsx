/**
 * Auto-generated logo component: Cloud Fog (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudFogLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudFogLogo = React.forwardRef<SVGSVGElement, CloudFogLogoProps>(
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
  <path d="M16 17H7" />
  <path d="M17 21H9" />
    </svg>
  )
);

CloudFogLogo.displayName = "CloudFogLogo";

export const CloudFogLogoMetadata = {
  id: "cloud-fog",
  baseId: "cloud-fog",
  variant: "default",
  name: "Cloud Fog",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudFogLogo;
