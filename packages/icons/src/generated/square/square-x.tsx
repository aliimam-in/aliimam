/**
 * Auto-generated logo component: Square X (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareXLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareXLogo = React.forwardRef<SVGSVGElement, SquareXLogoProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
  <path d="m15 9-6 6" />
  <path d="m9 9 6 6" />
    </svg>
  )
);

SquareXLogo.displayName = "SquareXLogo";

export const SquareXLogoMetadata = {
  id: "square-x",
  baseId: "square-x",
  variant: "default",
  name: "Square X",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareXLogo;
