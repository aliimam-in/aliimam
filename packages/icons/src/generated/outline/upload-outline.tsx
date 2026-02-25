/**
 * Auto-generated logo component: Upload Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UploadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UploadOutlineLogo = React.forwardRef<SVGSVGElement, UploadOutlineLogoProps>(
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
  <path d="M7 9l5 -5l5 5" />
  <path d="M12 4l0 12" />
    </svg>
  )
);

UploadOutlineLogo.displayName = "UploadOutlineLogo";

export const UploadOutlineLogoMetadata = {
  id: "upload-outline",
  baseId: "upload-outline",
  variant: "default",
  name: "Upload Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UploadOutlineLogo;
