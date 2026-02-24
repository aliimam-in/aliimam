/**
 * Auto-generated logo component: Upload Cloud (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UploadCloudLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UploadCloudLogo = React.forwardRef<SVGSVGElement, UploadCloudLogoProps>(
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
      <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/><polyline points="16 16 12 12 8 16"/>
    </svg>
  )
);

UploadCloudLogo.displayName = "UploadCloudLogo";

export const UploadCloudLogoMetadata = {
  id: "upload-cloud",
  baseId: "upload-cloud",
  variant: "default",
  name: "Upload Cloud",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UploadCloudLogo;
