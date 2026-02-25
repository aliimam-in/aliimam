/**
 * Auto-generated logo component: Cloud Upload Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CloudUploadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CloudUploadOutlineLogo = React.forwardRef<SVGSVGElement, CloudUploadOutlineLogoProps>(
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
      <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
  <path d="M9 15l3 -3l3 3" />
  <path d="M12 12l0 9" />
    </svg>
  )
);

CloudUploadOutlineLogo.displayName = "CloudUploadOutlineLogo";

export const CloudUploadOutlineLogoMetadata = {
  id: "cloud-upload-outline",
  baseId: "cloud-upload-outline",
  variant: "default",
  name: "Cloud Upload Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CloudUploadOutlineLogo;
