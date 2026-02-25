/**
 * Auto-generated logo component: Photo Share Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoShareOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoShareOutlineLogo = React.forwardRef<SVGSVGElement, PhotoShareOutlineLogoProps>(
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
  <path d="M12 21h-6a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v7" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3 3" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
    </svg>
  )
);

PhotoShareOutlineLogo.displayName = "PhotoShareOutlineLogo";

export const PhotoShareOutlineLogoMetadata = {
  id: "photo-share-outline",
  baseId: "photo-share-outline",
  variant: "default",
  name: "Photo Share Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoShareOutlineLogo;
