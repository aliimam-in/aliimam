/**
 * Auto-generated logo component: Brand Gmail Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandGmailOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandGmailOutlineLogo = React.forwardRef<SVGSVGElement, BrandGmailOutlineLogoProps>(
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
      <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16" />
  <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1" />
  <path d="M16 4l-4 4l-4 -4" />
  <path d="M4 6.5l8 7.5l8 -7.5" />
    </svg>
  )
);

BrandGmailOutlineLogo.displayName = "BrandGmailOutlineLogo";

export const BrandGmailOutlineLogoMetadata = {
  id: "brand-gmail-outline",
  baseId: "brand-gmail-outline",
  variant: "default",
  name: "Brand Gmail Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandGmailOutlineLogo;
