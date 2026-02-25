/**
 * Auto-generated logo component: Arrow Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowDownOutlineLogoProps>(
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
  <path d="M18 13l-6 6" />
  <path d="M6 13l6 6" />
    </svg>
  )
);

ArrowDownOutlineLogo.displayName = "ArrowDownOutlineLogo";

export const ArrowDownOutlineLogoMetadata = {
  id: "arrow-down-outline",
  baseId: "arrow-down-outline",
  variant: "default",
  name: "Arrow Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownOutlineLogo;
