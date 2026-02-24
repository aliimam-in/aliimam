/**
 * Auto-generated logo component: Square Arrow Right (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowRightLogo = React.forwardRef<SVGSVGElement, SquareArrowRightLogoProps>(
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
  <path d="M8 12h8" />
  <path d="m12 16 4-4-4-4" />
    </svg>
  )
);

SquareArrowRightLogo.displayName = "SquareArrowRightLogo";

export const SquareArrowRightLogoMetadata = {
  id: "square-arrow-right",
  baseId: "square-arrow-right",
  variant: "default",
  name: "Square Arrow Right",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowRightLogo;
