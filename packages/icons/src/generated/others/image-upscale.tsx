/**
 * Auto-generated logo component: Image Upscale (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ImageUpscaleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ImageUpscaleLogo = React.forwardRef<SVGSVGElement, ImageUpscaleLogoProps>(
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
      <path d="M16 3h5v5" />
  <path d="M17 21h2a2 2 0 0 0 2-2" />
  <path d="M21 12v3" />
  <path d="m21 3-5 5" />
  <path d="M3 7V5a2 2 0 0 1 2-2" />
  <path d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" />
  <path d="M9 3h3" />
  <rect x="3" y="11" width="10" height="10" rx="1" />
    </svg>
  )
);

ImageUpscaleLogo.displayName = "ImageUpscaleLogo";

export const ImageUpscaleLogoMetadata = {
  id: "image-upscale",
  baseId: "image-upscale",
  variant: "default",
  name: "Image Upscale",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ImageUpscaleLogo;
