/**
 * Auto-generated logo component: Photo Exclamation Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoExclamationOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoExclamationOutlineLogo = React.forwardRef<SVGSVGElement, PhotoExclamationOutlineLogoProps>(
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
  <path d="M15 21h-9a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
  <path d="M14 14l1 -1c.665 -.64 1.44 -.821 2.167 -.545" />
  <path d="M19 16v3" />
  <path d="M19 22v.01" />
    </svg>
  )
);

PhotoExclamationOutlineLogo.displayName = "PhotoExclamationOutlineLogo";

export const PhotoExclamationOutlineLogoMetadata = {
  id: "photo-exclamation-outline",
  baseId: "photo-exclamation-outline",
  variant: "default",
  name: "Photo Exclamation Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoExclamationOutlineLogo;
