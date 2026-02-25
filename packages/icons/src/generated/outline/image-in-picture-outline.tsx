/**
 * Auto-generated logo component: Image In Picture Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ImageInPictureOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ImageInPictureOutlineLogo = React.forwardRef<SVGSVGElement, ImageInPictureOutlineLogoProps>(
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
      <path d="M13 15c-2 0 -5 1 -5 5" />
  <path d="M4 13a2 2 0 0 1 2 -2h5a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2l0 -5" />
  <path d="M4 7v-2a1 1 0 0 1 1 -1h2" />
  <path d="M11 4h2" />
  <path d="M17 4h2a1 1 0 0 1 1 1v2" />
  <path d="M20 11v2" />
  <path d="M20 17v2a1 1 0 0 1 -1 1h-2" />
    </svg>
  )
);

ImageInPictureOutlineLogo.displayName = "ImageInPictureOutlineLogo";

export const ImageInPictureOutlineLogoMetadata = {
  id: "image-in-picture-outline",
  baseId: "image-in-picture-outline",
  variant: "default",
  name: "Image In Picture Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ImageInPictureOutlineLogo;
