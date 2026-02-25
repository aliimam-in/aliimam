/**
 * Auto-generated logo component: Letter X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterXOutlineLogo = React.forwardRef<SVGSVGElement, LetterXOutlineLogoProps>(
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
      <path d="M7 4l10 16" />
  <path d="M17 4l-10 16" />
    </svg>
  )
);

LetterXOutlineLogo.displayName = "LetterXOutlineLogo";

export const LetterXOutlineLogoMetadata = {
  id: "letter-x-outline",
  baseId: "letter-x-outline",
  variant: "default",
  name: "Letter X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterXOutlineLogo;
