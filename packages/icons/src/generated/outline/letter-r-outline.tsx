/**
 * Auto-generated logo component: Letter R Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterROutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterROutlineLogo = React.forwardRef<SVGSVGElement, LetterROutlineLogoProps>(
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
      <path d="M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5" />
  <path d="M12 13l5 7" />
    </svg>
  )
);

LetterROutlineLogo.displayName = "LetterROutlineLogo";

export const LetterROutlineLogoMetadata = {
  id: "letter-r-outline",
  baseId: "letter-r-outline",
  variant: "default",
  name: "Letter R Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterROutlineLogo;
