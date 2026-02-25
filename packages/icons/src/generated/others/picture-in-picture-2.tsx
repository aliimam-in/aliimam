/**
 * Auto-generated logo component: Picture In Picture 2 (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PictureInPicture2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PictureInPicture2Logo = React.forwardRef<SVGSVGElement, PictureInPicture2LogoProps>(
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
      <path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" />
  <rect width="10" height="7" x="12" y="13" rx="2" />
    </svg>
  )
);

PictureInPicture2Logo.displayName = "PictureInPicture2Logo";

export const PictureInPicture2LogoMetadata = {
  id: "picture-in-picture-2",
  baseId: "picture-in-picture-2",
  variant: "default",
  name: "Picture In Picture 2",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PictureInPicture2Logo;
