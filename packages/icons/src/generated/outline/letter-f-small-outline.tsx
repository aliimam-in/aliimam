/**
 * Auto-generated logo component: Letter F Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterFSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterFSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterFSmallOutlineLogoProps>(
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
      <path d="M10 12h3" />
  <path d="M14 8h-4v8" />
    </svg>
  )
);

LetterFSmallOutlineLogo.displayName = "LetterFSmallOutlineLogo";

export const LetterFSmallOutlineLogoMetadata = {
  id: "letter-f-small-outline",
  baseId: "letter-f-small-outline",
  variant: "default",
  name: "Letter F Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterFSmallOutlineLogo;
