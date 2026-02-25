/**
 * Auto-generated logo component: Photo Square Rounded Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoSquareRoundedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoSquareRoundedOutlineLogo = React.forwardRef<SVGSVGElement, PhotoSquareRoundedOutlineLogoProps>(
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
      <path d="M15 8h.01" />
  <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
  <path d="M3.5 15.5l4.5 -4.5c.928 -.893 2.072 -.893 3 0l5 5" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2.5 2.5" />
    </svg>
  )
);

PhotoSquareRoundedOutlineLogo.displayName = "PhotoSquareRoundedOutlineLogo";

export const PhotoSquareRoundedOutlineLogoMetadata = {
  id: "photo-square-rounded-outline",
  baseId: "photo-square-rounded-outline",
  variant: "default",
  name: "Photo Square Rounded Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoSquareRoundedOutlineLogo;
