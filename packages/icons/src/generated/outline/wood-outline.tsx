/**
 * Auto-generated logo component: Wood Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WoodOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WoodOutlineLogo = React.forwardRef<SVGSVGElement, WoodOutlineLogoProps>(
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
      <path d="M6 5.5a6 2.5 0 1 0 12 0a6 2.5 0 1 0 -12 0" />
  <path d="M18 5.5v4.626a1.415 1.415 0 0 1 1.683 2.18l-.097 .108l-1.586 1.586v4c0 1.61 -2.54 2.925 -5.725 3l-.275 0c-3.314 0 -6 -1.343 -6 -3v-2l-1.586 -1.586a1.414 1.414 0 0 1 1.586 -2.287v-6.627" />
  <path d="M10 12.5v1.5" />
  <path d="M14 16v1" />
    </svg>
  )
);

WoodOutlineLogo.displayName = "WoodOutlineLogo";

export const WoodOutlineLogoMetadata = {
  id: "wood-outline",
  baseId: "wood-outline",
  variant: "default",
  name: "Wood Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WoodOutlineLogo;
