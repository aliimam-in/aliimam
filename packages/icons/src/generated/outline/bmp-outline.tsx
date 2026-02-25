/**
 * Auto-generated logo component: Bmp Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BmpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BmpOutlineLogo = React.forwardRef<SVGSVGElement, BmpOutlineLogoProps>(
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
      <path d="M18 16v-8h2a2 2 0 1 1 0 4h-2" />
  <path d="M6 14a2 2 0 0 1 -2 2h-2v-8h2a2 2 0 1 1 0 4h-2h2a2 2 0 0 1 2 2" />
  <path d="M9 16v-8l3 6l3 -6v8" />
    </svg>
  )
);

BmpOutlineLogo.displayName = "BmpOutlineLogo";

export const BmpOutlineLogoMetadata = {
  id: "bmp-outline",
  baseId: "bmp-outline",
  variant: "default",
  name: "Bmp Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BmpOutlineLogo;
