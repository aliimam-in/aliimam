/**
 * Auto-generated logo component: Square Rounded Letter T (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareRoundedLetterTFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareRoundedLetterTFilledLogo = React.forwardRef<SVGSVGElement, SquareRoundedLetterTFilledLogoProps>(
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
      <path d="M11.676 2.001l.324 -.001c7.752 0 10 2.248 10 10l-.005 .642c-.126 7.235 -2.461 9.358 -9.995 9.358l-.642 -.005c-7.13 -.125 -9.295 -2.395 -9.358 -9.67v-.325c0 -7.643 2.185 -9.936 9.676 -9.999m2.324 4.999h-4a1 1 0 1 0 0 2h1v7a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-7h1a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1" />
    </svg>
  )
);

SquareRoundedLetterTFilledLogo.displayName = "SquareRoundedLetterTFilledLogo";

export const SquareRoundedLetterTFilledLogoMetadata = {
  id: "square-rounded-letter-t_filled",
  baseId: "square-rounded-letter-t",
  variant: "filled",
  name: "Square Rounded Letter T",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareRoundedLetterTFilledLogo;
