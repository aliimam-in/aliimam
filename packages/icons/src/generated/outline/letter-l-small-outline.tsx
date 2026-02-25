/**
 * Auto-generated logo component: Letter L Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterLSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterLSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterLSmallOutlineLogoProps>(
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
      <path d="M10 8v8h4" />
    </svg>
  )
);

LetterLSmallOutlineLogo.displayName = "LetterLSmallOutlineLogo";

export const LetterLSmallOutlineLogoMetadata = {
  id: "letter-l-small-outline",
  baseId: "letter-l-small-outline",
  variant: "default",
  name: "Letter L Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterLSmallOutlineLogo;
