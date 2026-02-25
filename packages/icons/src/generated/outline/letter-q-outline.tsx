/**
 * Auto-generated logo component: Letter Q Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterQOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterQOutlineLogo = React.forwardRef<SVGSVGElement, LetterQOutlineLogoProps>(
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
      <path d="M18 9a5 5 0 0 0 -5 -5h-2a5 5 0 0 0 -5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5 -5v-6" />
  <path d="M13 15l5 5" />
    </svg>
  )
);

LetterQOutlineLogo.displayName = "LetterQOutlineLogo";

export const LetterQOutlineLogoMetadata = {
  id: "letter-q-outline",
  baseId: "letter-q-outline",
  variant: "default",
  name: "Letter Q Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterQOutlineLogo;
