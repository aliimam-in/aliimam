/**
 * Auto-generated logo component: Photo Bitcoin Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhotoBitcoinOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhotoBitcoinOutlineLogo = React.forwardRef<SVGSVGElement, PhotoBitcoinOutlineLogoProps>(
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
      <path d="M17 21v-6m2 0v-1.5m0 9v-1.5m-2 -3h3m-1 0h.5a1.5 1.5 0 0 1 0 3h-3.5m3 -3h.5a1.5 1.5 0 0 0 0 -3h-3.5" />
  <path d="M15 8h.01" />
  <path d="M13 21h-7a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5" />
  <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2.5 2.5" />
    </svg>
  )
);

PhotoBitcoinOutlineLogo.displayName = "PhotoBitcoinOutlineLogo";

export const PhotoBitcoinOutlineLogoMetadata = {
  id: "photo-bitcoin-outline",
  baseId: "photo-bitcoin-outline",
  variant: "default",
  name: "Photo Bitcoin Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhotoBitcoinOutlineLogo;
