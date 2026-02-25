/**
 * Auto-generated logo component: Square X (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareXFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareXFilledLogo = React.forwardRef<SVGSVGElement, SquareXFilledLogoProps>(
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
      <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3zm-9.387 6.21l.094 .083l2.293 2.292l2.293 -2.292a1 1 0 0 1 1.497 1.32l-.083 .094l-2.292 2.293l2.292 2.293a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292l-2.293 2.292a1 1 0 0 1 -1.497 -1.32l.083 -.094l2.292 -2.293l-2.292 -2.293a1 1 0 0 1 1.32 -1.497z" />
    </svg>
  )
);

SquareXFilledLogo.displayName = "SquareXFilledLogo";

export const SquareXFilledLogoMetadata = {
  id: "square-x_filled",
  baseId: "square-x",
  variant: "filled",
  name: "Square X",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareXFilledLogo;
