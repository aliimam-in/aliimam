/**
 * Auto-generated logo component: Picture In Picture Top Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PictureInPictureTopFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PictureInPictureTopFilledLogo = React.forwardRef<SVGSVGElement, PictureInPictureTopFilledLogoProps>(
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
      <path d="M11 4a1 1 0 0 1 0 2h-6a1 1 0 0 0 -1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-4a1 1 0 0 1 2 0v4a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3z" />
  <path d="M20 4a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-5a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2z" />
    </svg>
  )
);

PictureInPictureTopFilledLogo.displayName = "PictureInPictureTopFilledLogo";

export const PictureInPictureTopFilledLogoMetadata = {
  id: "picture-in-picture-top-filled",
  baseId: "picture-in-picture-top-filled",
  variant: "default",
  name: "Picture In Picture Top Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PictureInPictureTopFilledLogo;
