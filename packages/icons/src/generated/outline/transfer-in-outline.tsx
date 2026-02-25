/**
 * Auto-generated logo component: Transfer In Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransferInOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransferInOutlineLogo = React.forwardRef<SVGSVGElement, TransferInOutlineLogoProps>(
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
      <path d="M4 18v3h16v-14l-8 -4l-8 4v3" />
  <path d="M4 14h9" />
  <path d="M10 11l3 3l-3 3" />
    </svg>
  )
);

TransferInOutlineLogo.displayName = "TransferInOutlineLogo";

export const TransferInOutlineLogoMetadata = {
  id: "transfer-in-outline",
  baseId: "transfer-in-outline",
  variant: "default",
  name: "Transfer In Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransferInOutlineLogo;
