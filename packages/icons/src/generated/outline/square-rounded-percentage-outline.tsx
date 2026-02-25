/**
 * Auto-generated logo component: Square Rounded Percentage Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedPercentageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedPercentageOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedPercentageOutlineLogoProps>(
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
      <path d="M12 3c7.2 0 9 1.8 9 9c0 7.2 -1.8 9 -9 9c-7.2 0 -9 -1.8 -9 -9c0 -7.2 1.8 -9 9 -9" />
  <path d="M9 15.075l6 -6" />
  <path d="M9 9.105v.015" />
  <path d="M15 15.12v.015" />
    </svg>
  )
);

SquareRoundedPercentageOutlineLogo.displayName = "SquareRoundedPercentageOutlineLogo";

export const SquareRoundedPercentageOutlineLogoMetadata = {
  id: "square-rounded-percentage-outline",
  baseId: "square-rounded-percentage-outline",
  variant: "default",
  name: "Square Rounded Percentage Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedPercentageOutlineLogo;
