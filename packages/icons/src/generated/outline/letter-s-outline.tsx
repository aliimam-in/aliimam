/**
 * Auto-generated logo component: Letter S Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterSOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterSOutlineLogo = React.forwardRef<SVGSVGElement, LetterSOutlineLogoProps>(
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
      <path d="M17 8a4 4 0 0 0 -4 -4h-2a4 4 0 0 0 0 8h2a4 4 0 0 1 0 8h-2a4 4 0 0 1 -4 -4" />
    </svg>
  )
);

LetterSOutlineLogo.displayName = "LetterSOutlineLogo";

export const LetterSOutlineLogoMetadata = {
  id: "letter-s-outline",
  baseId: "letter-s-outline",
  variant: "default",
  name: "Letter S Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterSOutlineLogo;
