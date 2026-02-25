/**
 * Auto-generated logo component: Square Menu (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareMenuLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareMenuLogo = React.forwardRef<SVGSVGElement, SquareMenuLogoProps>(
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
  <path d="M7 8h10" />
  <path d="M7 12h10" />
  <path d="M7 16h10" />
    </svg>
  )
);

SquareMenuLogo.displayName = "SquareMenuLogo";

export const SquareMenuLogoMetadata = {
  id: "square-menu",
  baseId: "square-menu",
  variant: "default",
  name: "Square Menu",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareMenuLogo;
