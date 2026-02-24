/**
 * Auto-generated logo component: Image (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ImageLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ImageLogo = React.forwardRef<SVGSVGElement, ImageLogoProps>(
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
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
    </svg>
  )
);

ImageLogo.displayName = "ImageLogo";

export const ImageLogoMetadata = {
  id: "image",
  baseId: "image",
  variant: "default",
  name: "Image",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ImageLogo;
