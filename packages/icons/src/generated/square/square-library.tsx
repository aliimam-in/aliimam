/**
 * Auto-generated logo component: Square Library (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLibraryLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLibraryLogo = React.forwardRef<SVGSVGElement, SquareLibraryLogoProps>(
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
  <path d="M7 7v10" />
  <path d="M11 7v10" />
  <path d="m15 7 2 10" />
    </svg>
  )
);

SquareLibraryLogo.displayName = "SquareLibraryLogo";

export const SquareLibraryLogoMetadata = {
  id: "square-library",
  baseId: "square-library",
  variant: "default",
  name: "Square Library",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLibraryLogo;
