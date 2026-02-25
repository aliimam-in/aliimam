/**
 * Auto-generated logo component: Square Letter N (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterNFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterNFilledLogo = React.forwardRef<SVGSVGElement, SquareLetterNFilledLogoProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-8.106 5.553c-.471 -.944 -1.894 -.608 -1.894 .447v8a1 1 0 0 0 1 1l.117 -.007a1 1 0 0 0 .883 -.993v-3.764l2.106 4.211c.471 .944 1.894 .608 1.894 -.447v-8a1 1 0 0 0 -1 -1l-.117 .007a1 1 0 0 0 -.883 .993v3.764z" />
    </svg>
  )
);

SquareLetterNFilledLogo.displayName = "SquareLetterNFilledLogo";

export const SquareLetterNFilledLogoMetadata = {
  id: "square-letter-n_filled",
  baseId: "square-letter-n",
  variant: "filled",
  name: "Square Letter N",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterNFilledLogo;
