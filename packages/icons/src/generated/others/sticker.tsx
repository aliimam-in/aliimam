/**
 * Auto-generated logo component: Sticker (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StickerLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StickerLogo = React.forwardRef<SVGSVGElement, StickerLogoProps>(
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
      <path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" />
  <path d="M15 3v5a1 1 0 0 0 1 1h5" />
  <path d="M8 13h.01" />
  <path d="M16 13h.01" />
  <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />
    </svg>
  )
);

StickerLogo.displayName = "StickerLogo";

export const StickerLogoMetadata = {
  id: "sticker",
  baseId: "sticker",
  variant: "default",
  name: "Sticker",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StickerLogo;
