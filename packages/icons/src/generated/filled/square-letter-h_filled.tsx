/**
 * Auto-generated logo component: Square Letter H (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterHFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterHFilledLogo = React.forwardRef<SVGSVGElement, SquareLetterHFilledLogoProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-5 5a1 1 0 0 0 -1 1v3h-2v-3a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v8a1 1 0 0 0 2 0v-3h2v3a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

SquareLetterHFilledLogo.displayName = "SquareLetterHFilledLogo";

export const SquareLetterHFilledLogoMetadata = {
  id: "square-letter-h_filled",
  baseId: "square-letter-h",
  variant: "filled",
  name: "Square Letter H",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterHFilledLogo;
