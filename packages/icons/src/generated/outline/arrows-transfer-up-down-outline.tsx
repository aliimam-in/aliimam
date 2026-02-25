/**
 * Auto-generated logo component: Arrows Transfer Up Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsTransferUpDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsTransferUpDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsTransferUpDownOutlineLogoProps>(
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
  <path d="M10 18l-3 3l-3 -3" />
  <path d="M7 3v2" />
  <path d="M7 9v2" />
  <path d="M17 3v6" />
  <path d="M17 21v-2" />
  <path d="M17 15v-2" />
    </svg>
  )
);

ArrowsTransferUpDownOutlineLogo.displayName = "ArrowsTransferUpDownOutlineLogo";

export const ArrowsTransferUpDownOutlineLogoMetadata = {
  id: "arrows-transfer-up-down-outline",
  baseId: "arrows-transfer-up-down-outline",
  variant: "default",
  name: "Arrows Transfer Up Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsTransferUpDownOutlineLogo;
