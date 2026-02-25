/**
 * Auto-generated logo component: Letter Z Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterZSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterZSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterZSmallOutlineLogoProps>(
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
      <path d="M10 8h4l-4 8h4" />
    </svg>
  )
);

LetterZSmallOutlineLogo.displayName = "LetterZSmallOutlineLogo";

export const LetterZSmallOutlineLogoMetadata = {
  id: "letter-z-small-outline",
  baseId: "letter-z-small-outline",
  variant: "default",
  name: "Letter Z Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterZSmallOutlineLogo;
