/**
 * Auto-generated logo component: Square Chevron Right (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareChevronRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareChevronRightLogo = React.forwardRef<SVGSVGElement, SquareChevronRightLogoProps>(
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
  <path d="m10 8 4 4-4 4" />
    </svg>
  )
);

SquareChevronRightLogo.displayName = "SquareChevronRightLogo";

export const SquareChevronRightLogoMetadata = {
  id: "square-chevron-right",
  baseId: "square-chevron-right",
  variant: "default",
  name: "Square Chevron Right",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareChevronRightLogo;
