/**
 * Auto-generated logo component: Image Up (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ImageUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ImageUpLogo = React.forwardRef<SVGSVGElement, ImageUpLogoProps>(
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
      <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
  <path d="m14 19.5 3-3 3 3" />
  <path d="M17 22v-5.5" />
  <circle cx="9" cy="9" r="2" />
    </svg>
  )
);

ImageUpLogo.displayName = "ImageUpLogo";

export const ImageUpLogoMetadata = {
  id: "image-up",
  baseId: "image-up",
  variant: "default",
  name: "Image Up",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ImageUpLogo;
