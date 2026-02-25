/**
 * Auto-generated logo component: Bell Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BellCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BellCheckOutlineLogo = React.forwardRef<SVGSVGElement, BellCheckOutlineLogoProps>(
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
      <path d="M11.5 17h-7.5a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3c.016 .129 .037 .256 .065 .382" />
  <path d="M9 17v1a3 3 0 0 0 2.502 2.959" />
  <path d="M15 19l2 2l4 -4" />
    </svg>
  )
);

BellCheckOutlineLogo.displayName = "BellCheckOutlineLogo";

export const BellCheckOutlineLogoMetadata = {
  id: "bell-check-outline",
  baseId: "bell-check-outline",
  variant: "default",
  name: "Bell Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BellCheckOutlineLogo;
