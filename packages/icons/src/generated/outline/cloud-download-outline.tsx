/**
 * Auto-generated logo component: Cloud Download Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudDownloadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudDownloadOutlineLogo = React.forwardRef<SVGSVGElement, CloudDownloadOutlineLogoProps>(
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
      <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
  <path d="M12 13l0 9" />
  <path d="M9 19l3 3l3 -3" />
    </svg>
  )
);

CloudDownloadOutlineLogo.displayName = "CloudDownloadOutlineLogo";

export const CloudDownloadOutlineLogoMetadata = {
  id: "cloud-download-outline",
  baseId: "cloud-download-outline",
  variant: "default",
  name: "Cloud Download Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudDownloadOutlineLogo;
