/**
 * Auto-generated logo component: Gallery Vertical (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GalleryVerticalLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GalleryVerticalLogo = React.forwardRef<SVGSVGElement, GalleryVerticalLogoProps>(
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
      <path d="M3 2h18" />
  <rect width="18" height="12" x="3" y="6" rx="2" />
  <path d="M3 22h18" />
    </svg>
  )
);

GalleryVerticalLogo.displayName = "GalleryVerticalLogo";

export const GalleryVerticalLogoMetadata = {
  id: "gallery-vertical",
  baseId: "gallery-vertical",
  variant: "default",
  name: "Gallery Vertical",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GalleryVerticalLogo;
