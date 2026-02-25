/**
 * Auto-generated logo component: Download Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DownloadOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DownloadOffOutlineLogo = React.forwardRef<SVGSVGElement, DownloadOffOutlineLogoProps>(
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
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 1.83 -1.19" />
  <path d="M7 11l5 5l2 -2m2 -2l1 -1" />
  <path d="M12 4v4m0 4v4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DownloadOffOutlineLogo.displayName = "DownloadOffOutlineLogo";

export const DownloadOffOutlineLogoMetadata = {
  id: "download-off-outline",
  baseId: "download-off-outline",
  variant: "default",
  name: "Download Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DownloadOffOutlineLogo;
