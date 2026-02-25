/**
 * Auto-generated logo component: Square Minus (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareMinusFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareMinusFilledLogo = React.forwardRef<SVGSVGElement, SquareMinusFilledLogoProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-4 9h-6l-.117 .007a1 1 0 0 0 .117 1.993h6l.117 -.007a1 1 0 0 0 -.117 -1.993z" />
    </svg>
  )
);

SquareMinusFilledLogo.displayName = "SquareMinusFilledLogo";

export const SquareMinusFilledLogoMetadata = {
  id: "square-minus_filled",
  baseId: "square-minus",
  variant: "filled",
  name: "Square Minus",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareMinusFilledLogo;
