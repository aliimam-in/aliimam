/**
 * Auto-generated logo component: Download Cloud (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DownloadCloudLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DownloadCloudLogo = React.forwardRef<SVGSVGElement, DownloadCloudLogoProps>(
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
      <polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"/>
    </svg>
  )
);

DownloadCloudLogo.displayName = "DownloadCloudLogo";

export const DownloadCloudLogoMetadata = {
  id: "download-cloud",
  baseId: "download-cloud",
  variant: "default",
  name: "Download Cloud",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DownloadCloudLogo;
