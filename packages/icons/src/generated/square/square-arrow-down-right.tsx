/**
 * Auto-generated logo component: Square Arrow Down Right (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowDownRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowDownRightLogo = React.forwardRef<SVGSVGElement, SquareArrowDownRightLogoProps>(
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
  <path d="m8 8 8 8" />
  <path d="M16 8v8H8" />
    </svg>
  )
);

SquareArrowDownRightLogo.displayName = "SquareArrowDownRightLogo";

export const SquareArrowDownRightLogoMetadata = {
  id: "square-arrow-down-right",
  baseId: "square-arrow-down-right",
  variant: "default",
  name: "Square Arrow Down Right",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowDownRightLogo;
