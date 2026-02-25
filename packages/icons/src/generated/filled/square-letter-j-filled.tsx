/**
 * Auto-generated logo component: Square Letter J Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterJFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterJFilledLogo = React.forwardRef<SVGSVGElement, SquareLetterJFilledLogoProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 5h-4a1 1 0 0 0 -1 1l.007 .117a1 1 0 0 0 .993 .883h3v5a1 1 0 0 1 -1.993 .117l-.007 -.117a1 1 0 0 0 -2 0a3 3 0 0 0 6 0v-6a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

SquareLetterJFilledLogo.displayName = "SquareLetterJFilledLogo";

export const SquareLetterJFilledLogoMetadata = {
  id: "square-letter-j-filled",
  baseId: "square-letter-j-filled",
  variant: "default",
  name: "Square Letter J Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterJFilledLogo;
