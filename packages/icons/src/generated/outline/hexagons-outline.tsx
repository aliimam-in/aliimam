/**
 * Auto-generated logo component: Hexagons Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonsOutlineLogo = React.forwardRef<SVGSVGElement, HexagonsOutlineLogoProps>(
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
      <path d="M4 18v-5l4 -2l4 2v5l-4 2l-4 -2" />
  <path d="M8 11v-5l4 -2l4 2v5" />
  <path d="M12 13l4 -2l4 2v5l-4 2l-4 -2" />
    </svg>
  )
);

HexagonsOutlineLogo.displayName = "HexagonsOutlineLogo";

export const HexagonsOutlineLogoMetadata = {
  id: "hexagons-outline",
  baseId: "hexagons-outline",
  variant: "default",
  name: "Hexagons Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonsOutlineLogo;
