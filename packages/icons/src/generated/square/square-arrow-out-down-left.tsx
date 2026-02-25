/**
 * Auto-generated logo component: Square Arrow Out Down Left (default)
 * Category: square
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowOutDownLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowOutDownLeftLogo = React.forwardRef<SVGSVGElement, SquareArrowOutDownLeftLogoProps>(
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
      <path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" />
  <path d="m3 21 9-9" />
  <path d="M9 21H3v-6" />
    </svg>
  )
);

SquareArrowOutDownLeftLogo.displayName = "SquareArrowOutDownLeftLogo";

export const SquareArrowOutDownLeftLogoMetadata = {
  id: "square-arrow-out-down-left",
  baseId: "square-arrow-out-down-left",
  variant: "default",
  name: "Square Arrow Out Down Left",
  category: "square",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowOutDownLeftLogo;
