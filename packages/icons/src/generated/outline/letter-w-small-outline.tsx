/**
 * Auto-generated logo component: Letter W Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterWSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterWSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterWSmallOutlineLogoProps>(
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
      <path d="M9 8l1 8l2 -5l2 5l1 -8" />
    </svg>
  )
);

LetterWSmallOutlineLogo.displayName = "LetterWSmallOutlineLogo";

export const LetterWSmallOutlineLogoMetadata = {
  id: "letter-w-small-outline",
  baseId: "letter-w-small-outline",
  variant: "default",
  name: "Letter W Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterWSmallOutlineLogo;
