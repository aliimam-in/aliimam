/**
 * Auto-generated logo component: Download Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DownloadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DownloadOutlineLogo = React.forwardRef<SVGSVGElement, DownloadOutlineLogoProps>(
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
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
  <path d="M7 11l5 5l5 -5" />
  <path d="M12 4l0 12" />
    </svg>
  )
);

DownloadOutlineLogo.displayName = "DownloadOutlineLogo";

export const DownloadOutlineLogoMetadata = {
  id: "download-outline",
  baseId: "download-outline",
  variant: "default",
  name: "Download Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DownloadOutlineLogo;
