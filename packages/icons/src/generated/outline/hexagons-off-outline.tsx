/**
 * Auto-generated logo component: Hexagons Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface HexagonsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const HexagonsOffOutlineLogo = React.forwardRef<SVGSVGElement, HexagonsOffOutlineLogoProps>(
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
  <path d="M8 11v-3m1.332 -2.666l2.668 -1.334l4 2v5" />
  <path d="M12 13l.661 -.331" />
  <path d="M15.345 11.328l.655 -.328l4 2v3m-1.334 2.667l-2.666 1.333l-4 -2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

HexagonsOffOutlineLogo.displayName = "HexagonsOffOutlineLogo";

export const HexagonsOffOutlineLogoMetadata = {
  id: "hexagons-off-outline",
  baseId: "hexagons-off-outline",
  variant: "default",
  name: "Hexagons Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default HexagonsOffOutlineLogo;
