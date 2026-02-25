/**
 * Auto-generated logo component: Square Letter P (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterPFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterPFilledLogo = React.forwardRef<SVGSVGElement, SquareLetterPFilledLogoProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5h-2a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-3h1a3 3 0 0 0 0 -6m0 2a1 1 0 0 1 0 2h-1v-2z" />
    </svg>
  )
);

SquareLetterPFilledLogo.displayName = "SquareLetterPFilledLogo";

export const SquareLetterPFilledLogoMetadata = {
  id: "square-letter-p_filled",
  baseId: "square-letter-p",
  variant: "filled",
  name: "Square Letter P",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterPFilledLogo;
