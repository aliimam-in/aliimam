/**
 * Auto-generated logo component: Square (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareFilledLogo = React.forwardRef<SVGSVGElement, SquareFilledLogoProps>(
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
      <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3z" />
    </svg>
  )
);

SquareFilledLogo.displayName = "SquareFilledLogo";

export const SquareFilledLogoMetadata = {
  id: "square_filled",
  baseId: "square",
  variant: "filled",
  name: "Square",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareFilledLogo;
