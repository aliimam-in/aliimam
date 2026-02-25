/**
 * Auto-generated logo component: Letter F Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterFOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterFOutlineLogo = React.forwardRef<SVGSVGElement, LetterFOutlineLogoProps>(
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
      <path d="M17 4h-10v16" />
  <path d="M7 12l8 0" />
    </svg>
  )
);

LetterFOutlineLogo.displayName = "LetterFOutlineLogo";

export const LetterFOutlineLogoMetadata = {
  id: "letter-f-outline",
  baseId: "letter-f-outline",
  variant: "default",
  name: "Letter F Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterFOutlineLogo;
