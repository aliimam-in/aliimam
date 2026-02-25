/**
 * Auto-generated logo component: Ban Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BanOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BanOutlineLogo = React.forwardRef<SVGSVGElement, BanOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M5.7 5.7l12.6 12.6" />
    </svg>
  )
);

BanOutlineLogo.displayName = "BanOutlineLogo";

export const BanOutlineLogoMetadata = {
  id: "ban-outline",
  baseId: "ban-outline",
  variant: "default",
  name: "Ban Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BanOutlineLogo;
