/**
 * Auto-generated logo component: Square Letter Q Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SquareLetterQFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SquareLetterQFilledLogo = React.forwardRef<SVGSVGElement, SquareLetterQFilledLogoProps>(
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
      <path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5a3 3 0 0 0 -3 3v4a3 3 0 0 0 4.168 2.764l.125 -.057a1 1 0 0 0 1.414 -1.414l.057 -.125a3 3 0 0 0 .236 -1.168v-4a3 3 0 0 0 -3 -3m1 7.001h-.059a.996 .996 0 0 0 -.941 1a1 1 0 0 1 -1 -1.001v-4a1 1 0 0 1 2 0z" />
    </svg>
  )
);

SquareLetterQFilledLogo.displayName = "SquareLetterQFilledLogo";

export const SquareLetterQFilledLogoMetadata = {
  id: "square-letter-q-filled",
  baseId: "square-letter-q-filled",
  variant: "default",
  name: "Square Letter Q Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SquareLetterQFilledLogo;
