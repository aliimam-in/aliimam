/**
 * Auto-generated logo component: Download (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DownloadLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DownloadLogo = React.forwardRef<SVGSVGElement, DownloadLogoProps>(
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
);

DownloadLogo.displayName = "DownloadLogo";

export const DownloadLogoMetadata = {
  id: "download",
  baseId: "download",
  variant: "default",
  name: "Download",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DownloadLogo;
