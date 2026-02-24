/**
 * Auto-generated logo component: Cloud Backup (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudBackupLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudBackupLogo = React.forwardRef<SVGSVGElement, CloudBackupLogoProps>(
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
      <path d="M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607" />
  <path d="M7 11v4h4" />
  <path d="M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15" />
    </svg>
  )
);

CloudBackupLogo.displayName = "CloudBackupLogo";

export const CloudBackupLogoMetadata = {
  id: "cloud-backup",
  baseId: "cloud-backup",
  variant: "default",
  name: "Cloud Backup",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudBackupLogo;
