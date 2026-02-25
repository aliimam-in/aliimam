/**
 * Auto-generated logo component: Arrow Left Bar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftBarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftBarOutlineLogo = React.forwardRef<SVGSVGElement, ArrowLeftBarOutlineLogoProps>(
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
      <path d="M21 12h-18" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M21 9v6" />
    </svg>
  )
);

ArrowLeftBarOutlineLogo.displayName = "ArrowLeftBarOutlineLogo";

export const ArrowLeftBarOutlineLogoMetadata = {
  id: "arrow-left-bar-outline",
  baseId: "arrow-left-bar-outline",
  variant: "default",
  name: "Arrow Left Bar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftBarOutlineLogo;
