/**
 * Auto-generated logo component: Arrows Transfer Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsTransferUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsTransferUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsTransferUpOutlineLogoProps>(
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
      <path d="M7 21v-6" />
  <path d="M20 6l-3 -3l-3 3" />
  <path d="M17 3v18" />
  <path d="M10 18l-3 3l-3 -3" />
  <path d="M7 3v2" />
  <path d="M7 9v2" />
    </svg>
  )
);

ArrowsTransferUpOutlineLogo.displayName = "ArrowsTransferUpOutlineLogo";

export const ArrowsTransferUpOutlineLogoMetadata = {
  id: "arrows-transfer-up-outline",
  baseId: "arrows-transfer-up-outline",
  variant: "default",
  name: "Arrows Transfer Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsTransferUpOutlineLogo;
