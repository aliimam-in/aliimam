/**
 * Auto-generated logo component: Picture In Picture Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PictureInPictureOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PictureInPictureOutlineLogo = React.forwardRef<SVGSVGElement, PictureInPictureOutlineLogoProps>(
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
      <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
  <path d="M14 15a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1l0 -3" />
    </svg>
  )
);

PictureInPictureOutlineLogo.displayName = "PictureInPictureOutlineLogo";

export const PictureInPictureOutlineLogoMetadata = {
  id: "picture-in-picture-outline",
  baseId: "picture-in-picture-outline",
  variant: "default",
  name: "Picture In Picture Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PictureInPictureOutlineLogo;
