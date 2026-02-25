/**
 * Auto-generated logo component: Square Letter V Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterVFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterVFilledLogo = React.forwardRef<SVGSVGElement, SquareLetterVFilledLogoProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-4.757 5.03a1 1 0 0 0 -1.213 .727l-1.03 4.118l-1.03 -4.118a1 1 0 1 0 -1.94 .486l2 8c.252 1.01 1.688 1.01 1.94 0l2 -8a1 1 0 0 0 -.727 -1.213" />
    </svg>
  )
);

SquareLetterVFilledLogo.displayName = "SquareLetterVFilledLogo";

export const SquareLetterVFilledLogoMetadata = {
  id: "square-letter-v-filled",
  baseId: "square-letter-v-filled",
  variant: "default",
  name: "Square Letter V Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterVFilledLogo;
