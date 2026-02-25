/**
 * Auto-generated logo component: Gallery Horizontal End (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GalleryHorizontalEndLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GalleryHorizontalEndLogo = React.forwardRef<SVGSVGElement, GalleryHorizontalEndLogoProps>(
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
      <path d="M2 7v10" />
  <path d="M6 5v14" />
  <rect width="12" height="18" x="10" y="3" rx="2" />
    </svg>
  )
);

GalleryHorizontalEndLogo.displayName = "GalleryHorizontalEndLogo";

export const GalleryHorizontalEndLogoMetadata = {
  id: "gallery-horizontal-end",
  baseId: "gallery-horizontal-end",
  variant: "default",
  name: "Gallery Horizontal End",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GalleryHorizontalEndLogo;
