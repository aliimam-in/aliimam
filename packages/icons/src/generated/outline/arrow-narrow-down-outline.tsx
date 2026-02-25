/**
 * Auto-generated logo component: Arrow Narrow Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowNarrowDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowNarrowDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowNarrowDownOutlineLogoProps>(
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
      <path d="M12 5l0 14" />
  <path d="M16 15l-4 4" />
  <path d="M8 15l4 4" />
    </svg>
  )
);

ArrowNarrowDownOutlineLogo.displayName = "ArrowNarrowDownOutlineLogo";

export const ArrowNarrowDownOutlineLogoMetadata = {
  id: "arrow-narrow-down-outline",
  baseId: "arrow-narrow-down-outline",
  variant: "default",
  name: "Arrow Narrow Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowNarrowDownOutlineLogo;
