/**
 * Auto-generated logo component: Letter M Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterMSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterMSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterMSmallOutlineLogoProps>(
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
      <path d="M9 16v-8l3 5l3 -5v8" />
    </svg>
  )
);

LetterMSmallOutlineLogo.displayName = "LetterMSmallOutlineLogo";

export const LetterMSmallOutlineLogoMetadata = {
  id: "letter-m-small-outline",
  baseId: "letter-m-small-outline",
  variant: "default",
  name: "Letter M Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterMSmallOutlineLogo;
