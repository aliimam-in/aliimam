/**
 * Auto-generated logo component: Square Chevron Down (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareChevronDownLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareChevronDownLogo = React.forwardRef<SVGSVGElement, SquareChevronDownLogoProps>(
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
  <path d="m16 10-4 4-4-4" />
    </svg>
  )
);

SquareChevronDownLogo.displayName = "SquareChevronDownLogo";

export const SquareChevronDownLogoMetadata = {
  id: "square-chevron-down",
  baseId: "square-chevron-down",
  variant: "default",
  name: "Square Chevron Down",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareChevronDownLogo;
