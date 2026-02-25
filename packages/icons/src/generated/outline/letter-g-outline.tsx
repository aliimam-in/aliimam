/**
 * Auto-generated logo component: Letter G Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterGOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterGOutlineLogo = React.forwardRef<SVGSVGElement, LetterGOutlineLogoProps>(
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
      <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-2h-4" />
    </svg>
  )
);

LetterGOutlineLogo.displayName = "LetterGOutlineLogo";

export const LetterGOutlineLogoMetadata = {
  id: "letter-g-outline",
  baseId: "letter-g-outline",
  variant: "default",
  name: "Letter G Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterGOutlineLogo;
