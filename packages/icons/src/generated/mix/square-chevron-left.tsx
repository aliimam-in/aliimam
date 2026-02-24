/**
 * Auto-generated logo component: Square Chevron Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareChevronLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareChevronLeftLogo = React.forwardRef<SVGSVGElement, SquareChevronLeftLogoProps>(
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
  <path d="m14 16-4-4 4-4" />
    </svg>
  )
);

SquareChevronLeftLogo.displayName = "SquareChevronLeftLogo";

export const SquareChevronLeftLogoMetadata = {
  id: "square-chevron-left",
  baseId: "square-chevron-left",
  variant: "default",
  name: "Square Chevron Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareChevronLeftLogo;
