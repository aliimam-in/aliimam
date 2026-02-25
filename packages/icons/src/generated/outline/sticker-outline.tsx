/**
 * Auto-generated logo component: Sticker Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StickerOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StickerOutlineLogo = React.forwardRef<SVGSVGElement, StickerOutlineLogoProps>(
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
      <path d="M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8" />
  <path d="M20 12a8 8 0 1 1 -8 -8" />
    </svg>
  )
);

StickerOutlineLogo.displayName = "StickerOutlineLogo";

export const StickerOutlineLogoMetadata = {
  id: "sticker-outline",
  baseId: "sticker-outline",
  variant: "default",
  name: "Sticker Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StickerOutlineLogo;
