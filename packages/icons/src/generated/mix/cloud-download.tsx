/**
 * Auto-generated logo component: Cloud Download (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudDownloadLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudDownloadLogo = React.forwardRef<SVGSVGElement, CloudDownloadLogoProps>(
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
      <path d="M12 13v8l-4-4" />
  <path d="m12 21 4-4" />
  <path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
    </svg>
  )
);

CloudDownloadLogo.displayName = "CloudDownloadLogo";

export const CloudDownloadLogoMetadata = {
  id: "cloud-download",
  baseId: "cloud-download",
  variant: "default",
  name: "Cloud Download",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudDownloadLogo;
