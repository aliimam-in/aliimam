/**
 * Auto-generated logo component: Letter V Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterVSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterVSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterVSmallOutlineLogoProps>(
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
      <path d="M10 8l2 8l2 -8" />
    </svg>
  )
);

LetterVSmallOutlineLogo.displayName = "LetterVSmallOutlineLogo";

export const LetterVSmallOutlineLogoMetadata = {
  id: "letter-v-small-outline",
  baseId: "letter-v-small-outline",
  variant: "default",
  name: "Letter V Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterVSmallOutlineLogo;
