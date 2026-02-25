/**
 * Auto-generated logo component: Square Percent (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquarePercentLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquarePercentLogo = React.forwardRef<SVGSVGElement, SquarePercentLogoProps>(
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
  <path d="m15 9-6 6" />
  <path d="M9 9h.01" />
  <path d="M15 15h.01" />
    </svg>
  )
);

SquarePercentLogo.displayName = "SquarePercentLogo";

export const SquarePercentLogoMetadata = {
  id: "square-percent",
  baseId: "square-percent",
  variant: "default",
  name: "Square Percent",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquarePercentLogo;
