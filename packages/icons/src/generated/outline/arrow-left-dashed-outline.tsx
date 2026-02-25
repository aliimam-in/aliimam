/**
 * Auto-generated logo component: Arrow Left Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftDashedOutlineLogo = React.forwardRef<SVGSVGElement, ArrowLeftDashedOutlineLogoProps>(
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
      <path d="M5 12h6m3 0h1.5m3 0h.5" />
  <path d="M5 12l6 6" />
  <path d="M5 12l6 -6" />
    </svg>
  )
);

ArrowLeftDashedOutlineLogo.displayName = "ArrowLeftDashedOutlineLogo";

export const ArrowLeftDashedOutlineLogoMetadata = {
  id: "arrow-left-dashed-outline",
  baseId: "arrow-left-dashed-outline",
  variant: "default",
  name: "Arrow Left Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftDashedOutlineLogo;
