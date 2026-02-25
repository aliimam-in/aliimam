/**
 * Auto-generated logo component: Hard Drive Upload (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HardDriveUploadLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HardDriveUploadLogo = React.forwardRef<SVGSVGElement, HardDriveUploadLogoProps>(
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
      <path d="m16 6-4-4-4 4" />
  <path d="M12 2v8" />
  <rect width="20" height="8" x="2" y="14" rx="2" />
  <path d="M6 18h.01" />
  <path d="M10 18h.01" />
    </svg>
  )
);

HardDriveUploadLogo.displayName = "HardDriveUploadLogo";

export const HardDriveUploadLogoMetadata = {
  id: "hard-drive-upload",
  baseId: "hard-drive-upload",
  variant: "default",
  name: "Hard Drive Upload",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HardDriveUploadLogo;
