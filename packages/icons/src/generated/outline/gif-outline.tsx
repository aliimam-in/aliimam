/**
 * Auto-generated logo component: Gif Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GifOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GifOutlineLogo = React.forwardRef<SVGSVGElement, GifOutlineLogoProps>(
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
      <path d="M8 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
  <path d="M12 8v8" />
  <path d="M16 12h3" />
  <path d="M20 8h-4v8" />
    </svg>
  )
);

GifOutlineLogo.displayName = "GifOutlineLogo";

export const GifOutlineLogoMetadata = {
  id: "gif-outline",
  baseId: "gif-outline",
  variant: "default",
  name: "Gif Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GifOutlineLogo;
