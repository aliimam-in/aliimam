/**
 * Auto-generated logo component: Square Rounded Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedPlusOutlineLogo = React.forwardRef<SVGSVGElement, SquareRoundedPlusOutlineLogoProps>(
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
  <path d="M15 12h-6" />
  <path d="M12 9v6" />
    </svg>
  )
);

SquareRoundedPlusOutlineLogo.displayName = "SquareRoundedPlusOutlineLogo";

export const SquareRoundedPlusOutlineLogoMetadata = {
  id: "square-rounded-plus-outline",
  baseId: "square-rounded-plus-outline",
  variant: "default",
  name: "Square Rounded Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedPlusOutlineLogo;
