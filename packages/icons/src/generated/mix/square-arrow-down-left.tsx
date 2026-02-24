/**
 * Auto-generated logo component: Square Arrow Down Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowDownLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowDownLeftLogo = React.forwardRef<SVGSVGElement, SquareArrowDownLeftLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
  <path d="m16 8-8 8" />
  <path d="M16 16H8V8" />
    </svg>
  )
);

SquareArrowDownLeftLogo.displayName = "SquareArrowDownLeftLogo";

export const SquareArrowDownLeftLogoMetadata = {
  id: "square-arrow-down-left",
  baseId: "square-arrow-down-left",
  variant: "default",
  name: "Square Arrow Down Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowDownLeftLogo;
