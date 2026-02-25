/**
 * Auto-generated logo component: Slideshow Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SlideshowOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SlideshowOutlineLogo = React.forwardRef<SVGSVGElement, SlideshowOutlineLogoProps>(
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
      <path d="M15 6l.01 0" />
  <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" />
  <path d="M3 13l4 -4a3 5 0 0 1 3 0l4 4" />
  <path d="M13 12l2 -2a3 5 0 0 1 3 0l3 3" />
  <path d="M8 21l.01 0" />
  <path d="M12 21l.01 0" />
  <path d="M16 21l.01 0" />
    </svg>
  )
);

SlideshowOutlineLogo.displayName = "SlideshowOutlineLogo";

export const SlideshowOutlineLogoMetadata = {
  id: "slideshow-outline",
  baseId: "slideshow-outline",
  variant: "default",
  name: "Slideshow Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SlideshowOutlineLogo;
