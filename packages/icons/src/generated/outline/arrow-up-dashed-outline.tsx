/**
 * Auto-generated logo component: Arrow Up Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowUpDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowUpDashedOutlineLogo = React.forwardRef<SVGSVGElement, ArrowUpDashedOutlineLogoProps>(
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
      <path d="M12 5v6m0 3v1.5m0 3v.5" />
  <path d="M18 11l-6 -6" />
  <path d="M6 11l6 -6" />
    </svg>
  )
);

ArrowUpDashedOutlineLogo.displayName = "ArrowUpDashedOutlineLogo";

export const ArrowUpDashedOutlineLogoMetadata = {
  id: "arrow-up-dashed-outline",
  baseId: "arrow-up-dashed-outline",
  variant: "default",
  name: "Arrow Up Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowUpDashedOutlineLogo;
