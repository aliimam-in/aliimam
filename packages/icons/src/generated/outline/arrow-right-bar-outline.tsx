/**
 * Auto-generated logo component: Arrow Right Bar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRightBarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRightBarOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRightBarOutlineLogoProps>(
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
      <path d="M18 15l3 -3l-3 -3" />
  <path d="M3 12h18" />
  <path d="M3 9v6" />
    </svg>
  )
);

ArrowRightBarOutlineLogo.displayName = "ArrowRightBarOutlineLogo";

export const ArrowRightBarOutlineLogoMetadata = {
  id: "arrow-right-bar-outline",
  baseId: "arrow-right-bar-outline",
  variant: "default",
  name: "Arrow Right Bar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRightBarOutlineLogo;
