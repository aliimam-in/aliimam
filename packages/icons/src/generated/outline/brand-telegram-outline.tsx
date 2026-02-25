/**
 * Auto-generated logo component: Brand Telegram Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandTelegramOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandTelegramOutlineLogo = React.forwardRef<SVGSVGElement, BrandTelegramOutlineLogoProps>(
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
      <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
    </svg>
  )
);

BrandTelegramOutlineLogo.displayName = "BrandTelegramOutlineLogo";

export const BrandTelegramOutlineLogoMetadata = {
  id: "brand-telegram-outline",
  baseId: "brand-telegram-outline",
  variant: "default",
  name: "Brand Telegram Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandTelegramOutlineLogo;
