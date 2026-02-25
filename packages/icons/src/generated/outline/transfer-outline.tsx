/**
 * Auto-generated logo component: Transfer Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransferOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransferOutlineLogo = React.forwardRef<SVGSVGElement, TransferOutlineLogoProps>(
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
      <path d="M20 10h-16l5.5 -6" />
  <path d="M4 14h16l-5.5 6" />
    </svg>
  )
);

TransferOutlineLogo.displayName = "TransferOutlineLogo";

export const TransferOutlineLogoMetadata = {
  id: "transfer-outline",
  baseId: "transfer-outline",
  variant: "default",
  name: "Transfer Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransferOutlineLogo;
