/**
 * Auto-generated logo component: Photo Shield Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoShieldOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoShieldOutlineLogo = React.forwardRef<SVGSVGElement, PhotoShieldOutlineLogoProps>(
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
  <path d="M11.5 20h-4.5a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v4" />
  <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l1.5 1.5" />
  <path d="M22 16c0 4 -2.5 6 -3.5 6s-3.5 -2 -3.5 -6c1 0 2.5 -.5 3.5 -1.5c1 1 2.5 1.5 3.5 1.5" />
    </svg>
  )
);

PhotoShieldOutlineLogo.displayName = "PhotoShieldOutlineLogo";

export const PhotoShieldOutlineLogoMetadata = {
  id: "photo-shield-outline",
  baseId: "photo-shield-outline",
  variant: "default",
  name: "Photo Shield Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoShieldOutlineLogo;
