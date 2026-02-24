/**
 * Auto-generated logo component: Square Arrow Out Down Right (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareArrowOutDownRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareArrowOutDownRightLogo = React.forwardRef<SVGSVGElement, SquareArrowOutDownRightLogoProps>(
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
      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
  <path d="m21 21-9-9" />
  <path d="M21 15v6h-6" />
    </svg>
  )
);

SquareArrowOutDownRightLogo.displayName = "SquareArrowOutDownRightLogo";

export const SquareArrowOutDownRightLogoMetadata = {
  id: "square-arrow-out-down-right",
  baseId: "square-arrow-out-down-right",
  variant: "default",
  name: "Square Arrow Out Down Right",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareArrowOutDownRightLogo;
