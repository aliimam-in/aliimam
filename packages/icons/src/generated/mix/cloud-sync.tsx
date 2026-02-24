/**
 * Auto-generated logo component: Cloud Sync (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudSyncLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudSyncLogo = React.forwardRef<SVGSVGElement, CloudSyncLogoProps>(
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
      <path d="m17 18-1.535 1.605a5 5 0 0 1-8-1.5" />
  <path d="M17 22v-4h-4" />
  <path d="M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607" />
  <path d="M7 10v4h4" />
  <path d="m7 14 1.535-1.605a5 5 0 0 1 8 1.5" />
    </svg>
  )
);

CloudSyncLogo.displayName = "CloudSyncLogo";

export const CloudSyncLogoMetadata = {
  id: "cloud-sync",
  baseId: "cloud-sync",
  variant: "default",
  name: "Cloud Sync",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudSyncLogo;
