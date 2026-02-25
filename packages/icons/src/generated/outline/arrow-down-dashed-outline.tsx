/**
 * Auto-generated logo component: Arrow Down Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownDashedOutlineLogo = React.forwardRef<SVGSVGElement, ArrowDownDashedOutlineLogoProps>(
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
      <path d="M12 5v.5m0 3v1.5m0 3v6" />
  <path d="M18 13l-6 6" />
  <path d="M6 13l6 6" />
    </svg>
  )
);

ArrowDownDashedOutlineLogo.displayName = "ArrowDownDashedOutlineLogo";

export const ArrowDownDashedOutlineLogoMetadata = {
  id: "arrow-down-dashed-outline",
  baseId: "arrow-down-dashed-outline",
  variant: "default",
  name: "Arrow Down Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownDashedOutlineLogo;
