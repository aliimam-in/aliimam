/**
 * Auto-generated logo component: Letter C Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterCSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterCSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterCSmallOutlineLogoProps>(
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
      <path d="M14 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
    </svg>
  )
);

LetterCSmallOutlineLogo.displayName = "LetterCSmallOutlineLogo";

export const LetterCSmallOutlineLogoMetadata = {
  id: "letter-c-small-outline",
  baseId: "letter-c-small-outline",
  variant: "default",
  name: "Letter C Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterCSmallOutlineLogo;
