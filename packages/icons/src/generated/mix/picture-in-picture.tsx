/**
 * Auto-generated logo component: Picture In Picture (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PictureInPictureLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PictureInPictureLogo = React.forwardRef<SVGSVGElement, PictureInPictureLogoProps>(
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
      <path d="M2 10h6V4" />
  <path d="m2 4 6 6" />
  <path d="M21 10V7a2 2 0 0 0-2-2h-7" />
  <path d="M3 14v2a2 2 0 0 0 2 2h3" />
  <rect x="12" y="14" width="10" height="7" rx="1" />
    </svg>
  )
);

PictureInPictureLogo.displayName = "PictureInPictureLogo";

export const PictureInPictureLogoMetadata = {
  id: "picture-in-picture",
  baseId: "picture-in-picture",
  variant: "default",
  name: "Picture In Picture",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PictureInPictureLogo;
