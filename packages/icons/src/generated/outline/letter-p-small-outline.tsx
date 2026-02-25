/**
 * Auto-generated logo component: Letter P Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterPSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterPSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterPSmallOutlineLogoProps>(
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
      <path d="M10 12h2a2 2 0 1 0 0 -4h-2v8" />
    </svg>
  )
);

LetterPSmallOutlineLogo.displayName = "LetterPSmallOutlineLogo";

export const LetterPSmallOutlineLogoMetadata = {
  id: "letter-p-small-outline",
  baseId: "letter-p-small-outline",
  variant: "default",
  name: "Letter P Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterPSmallOutlineLogo;
