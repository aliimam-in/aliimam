/**
 * Auto-generated logo component: Letter A Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterAOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterAOutlineLogo = React.forwardRef<SVGSVGElement, LetterAOutlineLogoProps>(
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
      <path d="M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12" />
  <path d="M7 13l10 0" />
    </svg>
  )
);

LetterAOutlineLogo.displayName = "LetterAOutlineLogo";

export const LetterAOutlineLogoMetadata = {
  id: "letter-a-outline",
  baseId: "letter-a-outline",
  variant: "default",
  name: "Letter A Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterAOutlineLogo;
