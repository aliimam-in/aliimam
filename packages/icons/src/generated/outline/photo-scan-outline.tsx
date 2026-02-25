/**
 * Auto-generated logo component: Photo Scan Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoScanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoScanOutlineLogo = React.forwardRef<SVGSVGElement, PhotoScanOutlineLogoProps>(
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
      <path d="M15 8h.01" />
  <path d="M6 13l2.644 -2.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" />
  <path d="M13 13l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l1.644 1.644" />
  <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
  <path d="M4 16v2a2 2 0 0 0 2 2h2" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    </svg>
  )
);

PhotoScanOutlineLogo.displayName = "PhotoScanOutlineLogo";

export const PhotoScanOutlineLogoMetadata = {
  id: "photo-scan-outline",
  baseId: "photo-scan-outline",
  variant: "default",
  name: "Photo Scan Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoScanOutlineLogo;
