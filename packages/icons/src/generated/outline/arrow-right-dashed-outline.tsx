/**
 * Auto-generated logo component: Arrow Right Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRightDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRightDashedOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRightDashedOutlineLogoProps>(
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
      <path d="M5 12h.5m3 0h1.5m3 0h6" />
  <path d="M13 18l6 -6" />
  <path d="M13 6l6 6" />
    </svg>
  )
);

ArrowRightDashedOutlineLogo.displayName = "ArrowRightDashedOutlineLogo";

export const ArrowRightDashedOutlineLogoMetadata = {
  id: "arrow-right-dashed-outline",
  baseId: "arrow-right-dashed-outline",
  variant: "default",
  name: "Arrow Right Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRightDashedOutlineLogo;
