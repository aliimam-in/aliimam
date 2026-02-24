/**
 * Auto-generated logo component: Square Arrow Up Right (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowUpRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowUpRightLogo = React.forwardRef<SVGSVGElement, SquareArrowUpRightLogoProps>(
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
  <path d="M8 8h8v8" />
  <path d="m8 16 8-8" />
    </svg>
  )
);

SquareArrowUpRightLogo.displayName = "SquareArrowUpRightLogo";

export const SquareArrowUpRightLogoMetadata = {
  id: "square-arrow-up-right",
  baseId: "square-arrow-up-right",
  variant: "default",
  name: "Square Arrow Up Right",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowUpRightLogo;
