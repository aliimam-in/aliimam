/**
 * Auto-generated logo component: Photo Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoMinusOutlineLogo = React.forwardRef<SVGSVGElement, PhotoMinusOutlineLogoProps>(
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
  <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v9" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
  <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" />
  <path d="M16 19h6" />
    </svg>
  )
);

PhotoMinusOutlineLogo.displayName = "PhotoMinusOutlineLogo";

export const PhotoMinusOutlineLogoMetadata = {
  id: "photo-minus-outline",
  baseId: "photo-minus-outline",
  variant: "default",
  name: "Photo Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoMinusOutlineLogo;
