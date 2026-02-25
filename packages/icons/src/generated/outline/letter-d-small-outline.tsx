/**
 * Auto-generated logo component: Letter D Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterDSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterDSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterDSmallOutlineLogoProps>(
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
      <path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2" />
    </svg>
  )
);

LetterDSmallOutlineLogo.displayName = "LetterDSmallOutlineLogo";

export const LetterDSmallOutlineLogoMetadata = {
  id: "letter-d-small-outline",
  baseId: "letter-d-small-outline",
  variant: "default",
  name: "Letter D Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterDSmallOutlineLogo;
