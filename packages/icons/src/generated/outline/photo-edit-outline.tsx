/**
 * Auto-generated logo component: Photo Edit Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoEditOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoEditOutlineLogo = React.forwardRef<SVGSVGElement, PhotoEditOutlineLogoProps>(
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
  <path d="M11 20h-4a3 3 0 0 1 -3 -3v-10a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v4" />
  <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l3 3" />
  <path d="M14 14l1 -1c.31 -.298 .644 -.497 .987 -.596" />
  <path d="M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97l-3.39 3.42h-3v-3l3.42 -3.39" />
    </svg>
  )
);

PhotoEditOutlineLogo.displayName = "PhotoEditOutlineLogo";

export const PhotoEditOutlineLogoMetadata = {
  id: "photo-edit-outline",
  baseId: "photo-edit-outline",
  variant: "default",
  name: "Photo Edit Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoEditOutlineLogo;
