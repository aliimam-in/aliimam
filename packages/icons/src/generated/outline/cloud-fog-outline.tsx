/**
 * Auto-generated logo component: Cloud Fog Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudFogOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudFogOutlineLogo = React.forwardRef<SVGSVGElement, CloudFogOutlineLogoProps>(
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
      <path d="M7 16a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
  <path d="M5 20l14 0" />
    </svg>
  )
);

CloudFogOutlineLogo.displayName = "CloudFogOutlineLogo";

export const CloudFogOutlineLogoMetadata = {
  id: "cloud-fog-outline",
  baseId: "cloud-fog-outline",
  variant: "default",
  name: "Cloud Fog Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudFogOutlineLogo;
