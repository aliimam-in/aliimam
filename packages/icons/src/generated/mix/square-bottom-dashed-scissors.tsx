/**
 * Auto-generated logo component: Square Bottom Dashed Scissors (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareBottomDashedScissorsLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareBottomDashedScissorsLogo = React.forwardRef<SVGSVGElement, SquareBottomDashedScissorsLogoProps>(
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
      <line x1="5" y1="3" x2="19" y2="3" />
  <line x1="3" y1="5" x2="3" y2="19" />
  <line x1="21" y1="5" x2="21" y2="19" />
  <line x1="9" y1="21" x2="10" y2="21" />
  <line x1="14" y1="21" x2="15" y2="21" />
  <path d="M 3 5 A2 2 0 0 1 5 3" />
  <path d="M 19 3 A2 2 0 0 1 21 5" />
  <path d="M 5 21 A2 2 0 0 1 3 19" />
  <path d="M 21 19 A2 2 0 0 1 19 21" />
  <circle cx="8.5" cy="8.5" r="1.5" />
  <line x1="9.56066" y1="9.56066" x2="12" y2="12" />
  <line x1="17" y1="17" x2="14.82" y2="14.82" />
  <circle cx="8.5" cy="15.5" r="1.5" />
  <line x1="9.56066" y1="14.43934" x2="17" y2="7" />
    </svg>
  )
);

SquareBottomDashedScissorsLogo.displayName = "SquareBottomDashedScissorsLogo";

export const SquareBottomDashedScissorsLogoMetadata = {
  id: "square-bottom-dashed-scissors",
  baseId: "square-bottom-dashed-scissors",
  variant: "default",
  name: "Square Bottom Dashed Scissors",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareBottomDashedScissorsLogo;
