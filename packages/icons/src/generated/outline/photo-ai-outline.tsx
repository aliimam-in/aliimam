/**
 * Auto-generated logo component: Photo Ai Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoAiOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoAiOutlineLogo = React.forwardRef<SVGSVGElement, PhotoAiOutlineLogoProps>(
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
  <path d="M10 21h-4a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l1 1" />
  <path d="M14 21v-4a2 2 0 1 1 4 0v4" />
  <path d="M14 19h4" />
  <path d="M21 15v6" />
    </svg>
  )
);

PhotoAiOutlineLogo.displayName = "PhotoAiOutlineLogo";

export const PhotoAiOutlineLogoMetadata = {
  id: "photo-ai-outline",
  baseId: "photo-ai-outline",
  variant: "default",
  name: "Photo Ai Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoAiOutlineLogo;
