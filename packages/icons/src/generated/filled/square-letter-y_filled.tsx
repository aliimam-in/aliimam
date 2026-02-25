/**
 * Auto-generated logo component: Square Letter Y (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterYFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterYFilledLogo = React.forwardRef<SVGSVGElement, SquareLetterYFilledLogoProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-4.629 5.072a1 1 0 0 0 -1.3 .557l-1.071 2.678l-1.072 -2.678a1 1 0 0 0 -1.856 .742l1.928 4.823v2.806a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-2.809l1.928 -4.82a1 1 0 0 0 -.45 -1.25z" />
    </svg>
  )
);

SquareLetterYFilledLogo.displayName = "SquareLetterYFilledLogo";

export const SquareLetterYFilledLogoMetadata = {
  id: "square-letter-y_filled",
  baseId: "square-letter-y",
  variant: "filled",
  name: "Square Letter Y",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterYFilledLogo;
