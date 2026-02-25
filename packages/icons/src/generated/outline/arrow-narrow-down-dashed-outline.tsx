/**
 * Auto-generated logo component: Arrow Narrow Down Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowNarrowDownDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowNarrowDownDashedOutlineLogo = React.forwardRef<SVGSVGElement, ArrowNarrowDownDashedOutlineLogoProps>(
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
  <path d="M16 15l-4 4" />
  <path d="M8 15l4 4" />
    </svg>
  )
);

ArrowNarrowDownDashedOutlineLogo.displayName = "ArrowNarrowDownDashedOutlineLogo";

export const ArrowNarrowDownDashedOutlineLogoMetadata = {
  id: "arrow-narrow-down-dashed-outline",
  baseId: "arrow-narrow-down-dashed-outline",
  variant: "default",
  name: "Arrow Narrow Down Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowNarrowDownDashedOutlineLogo;
