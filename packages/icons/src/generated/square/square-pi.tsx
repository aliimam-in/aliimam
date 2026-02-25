/**
 * Auto-generated logo component: Square Pi (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquarePiLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquarePiLogo = React.forwardRef<SVGSVGElement, SquarePiLogoProps>(
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
  <path d="M7 7h10" />
  <path d="M10 7v10" />
  <path d="M16 17a2 2 0 0 1-2-2V7" />
    </svg>
  )
);

SquarePiLogo.displayName = "SquarePiLogo";

export const SquarePiLogoMetadata = {
  id: "square-pi",
  baseId: "square-pi",
  variant: "default",
  name: "Square Pi",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquarePiLogo;
