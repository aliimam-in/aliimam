/**
 * Auto-generated logo component: Transfer Vertical Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TransferVerticalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TransferVerticalOutlineLogo = React.forwardRef<SVGSVGElement, TransferVerticalOutlineLogoProps>(
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
      <path d="M10 4v16l-6 -5.5" />
  <path d="M14 20v-16l6 5.5" />
    </svg>
  )
);

TransferVerticalOutlineLogo.displayName = "TransferVerticalOutlineLogo";

export const TransferVerticalOutlineLogoMetadata = {
  id: "transfer-vertical-outline",
  baseId: "transfer-vertical-outline",
  variant: "default",
  name: "Transfer Vertical Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TransferVerticalOutlineLogo;
