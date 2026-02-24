/**
 * Auto-generated logo component: Hard Drive Download (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HardDriveDownloadLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HardDriveDownloadLogo = React.forwardRef<SVGSVGElement, HardDriveDownloadLogoProps>(
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
      <path d="M12 2v8" />
  <path d="m16 6-4 4-4-4" />
  <rect width="20" height="8" x="2" y="14" rx="2" />
  <path d="M6 18h.01" />
  <path d="M10 18h.01" />
    </svg>
  )
);

HardDriveDownloadLogo.displayName = "HardDriveDownloadLogo";

export const HardDriveDownloadLogoMetadata = {
  id: "hard-drive-download",
  baseId: "hard-drive-download",
  variant: "default",
  name: "Hard Drive Download",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HardDriveDownloadLogo;
