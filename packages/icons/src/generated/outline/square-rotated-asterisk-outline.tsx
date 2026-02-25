/**
 * Auto-generated logo component: Square Rotated Asterisk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRotatedAsteriskOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRotatedAsteriskOutlineLogo = React.forwardRef<SVGSVGElement, SquareRotatedAsteriskOutlineLogoProps>(
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
      <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0" />
  <path d="M12 8.5v7" />
  <path d="M9 10l6 4" />
  <path d="M9 14l6 -4" />
    </svg>
  )
);

SquareRotatedAsteriskOutlineLogo.displayName = "SquareRotatedAsteriskOutlineLogo";

export const SquareRotatedAsteriskOutlineLogoMetadata = {
  id: "square-rotated-asterisk-outline",
  baseId: "square-rotated-asterisk-outline",
  variant: "default",
  name: "Square Rotated Asterisk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRotatedAsteriskOutlineLogo;
