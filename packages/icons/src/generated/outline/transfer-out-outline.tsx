/**
 * Auto-generated logo component: Transfer Out Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransferOutOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransferOutOutlineLogo = React.forwardRef<SVGSVGElement, TransferOutOutlineLogoProps>(
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
      <path d="M4 19v2h16v-14l-8 -4l-8 4v2" />
  <path d="M13 14h-9" />
  <path d="M7 11l-3 3l3 3" />
    </svg>
  )
);

TransferOutOutlineLogo.displayName = "TransferOutOutlineLogo";

export const TransferOutOutlineLogoMetadata = {
  id: "transfer-out-outline",
  baseId: "transfer-out-outline",
  variant: "default",
  name: "Transfer Out Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransferOutOutlineLogo;
