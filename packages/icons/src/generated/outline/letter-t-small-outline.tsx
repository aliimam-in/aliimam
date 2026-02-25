/**
 * Auto-generated logo component: Letter T Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterTSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterTSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterTSmallOutlineLogoProps>(
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
      <path d="M10 8h4" />
  <path d="M12 8v8" />
    </svg>
  )
);

LetterTSmallOutlineLogo.displayName = "LetterTSmallOutlineLogo";

export const LetterTSmallOutlineLogoMetadata = {
  id: "letter-t-small-outline",
  baseId: "letter-t-small-outline",
  variant: "default",
  name: "Letter T Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterTSmallOutlineLogo;
