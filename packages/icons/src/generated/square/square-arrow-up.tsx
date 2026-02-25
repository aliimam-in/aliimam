/**
 * Auto-generated logo component: Square Arrow Up (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowUpLogo = React.forwardRef<SVGSVGElement, SquareArrowUpLogoProps>(
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
  <path d="m16 12-4-4-4 4" />
  <path d="M12 16V8" />
    </svg>
  )
);

SquareArrowUpLogo.displayName = "SquareArrowUpLogo";

export const SquareArrowUpLogoMetadata = {
  id: "square-arrow-up",
  baseId: "square-arrow-up",
  variant: "default",
  name: "Square Arrow Up",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowUpLogo;
