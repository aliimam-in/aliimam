/**
 * Auto-generated logo component: Image Play (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ImagePlayLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ImagePlayLogo = React.forwardRef<SVGSVGElement, ImagePlayLogoProps>(
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
      <path d="M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" />
  <path d="M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
  <path d="m6 21 5-5" />
  <circle cx="9" cy="9" r="2" />
    </svg>
  )
);

ImagePlayLogo.displayName = "ImagePlayLogo";

export const ImagePlayLogoMetadata = {
  id: "image-play",
  baseId: "image-play",
  variant: "default",
  name: "Image Play",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ImagePlayLogo;
