/**
 * Auto-generated logo component: Photo Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoUpOutlineLogo = React.forwardRef<SVGSVGElement, PhotoUpOutlineLogoProps>(
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
  <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l3.5 3.5" />
  <path d="M14 14l1 -1c.679 -.653 1.473 -.829 2.214 -.526" />
  <path d="M19 22v-6" />
  <path d="M22 19l-3 -3l-3 3" />
    </svg>
  )
);

PhotoUpOutlineLogo.displayName = "PhotoUpOutlineLogo";

export const PhotoUpOutlineLogoMetadata = {
  id: "photo-up-outline",
  baseId: "photo-up-outline",
  variant: "default",
  name: "Photo Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoUpOutlineLogo;
