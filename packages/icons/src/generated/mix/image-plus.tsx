/**
 * Auto-generated logo component: Image Plus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ImagePlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ImagePlusLogo = React.forwardRef<SVGSVGElement, ImagePlusLogoProps>(
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
      <path d="M16 5h6" />
  <path d="M19 2v6" />
  <path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" />
  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  <circle cx="9" cy="9" r="2" />
    </svg>
  )
);

ImagePlusLogo.displayName = "ImagePlusLogo";

export const ImagePlusLogoMetadata = {
  id: "image-plus",
  baseId: "image-plus",
  variant: "default",
  name: "Image Plus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ImagePlusLogo;
