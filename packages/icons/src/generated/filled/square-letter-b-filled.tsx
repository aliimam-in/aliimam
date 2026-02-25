/**
 * Auto-generated logo component: Square Letter B Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterBFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterBFilledLogo = React.forwardRef<SVGSVGElement, SquareLetterBFilledLogoProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5h-2a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h2a3 3 0 0 0 3 -3l-.005 -.176a3 3 0 0 0 -.654 -1.7l-.106 -.124l.106 -.124a3 3 0 0 0 -2.341 -4.876m0 6a1 1 0 0 1 0 2h-1v-2zm0 -4a1 1 0 0 1 0 2h-1v-2z" />
    </svg>
  )
);

SquareLetterBFilledLogo.displayName = "SquareLetterBFilledLogo";

export const SquareLetterBFilledLogoMetadata = {
  id: "square-letter-b-filled",
  baseId: "square-letter-b-filled",
  variant: "default",
  name: "Square Letter B Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterBFilledLogo;
