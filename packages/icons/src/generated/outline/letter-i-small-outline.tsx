/**
 * Auto-generated logo component: Letter I Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterISmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterISmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterISmallOutlineLogoProps>(
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
      <path d="M12 8v8" />
    </svg>
  )
);

LetterISmallOutlineLogo.displayName = "LetterISmallOutlineLogo";

export const LetterISmallOutlineLogoMetadata = {
  id: "letter-i-small-outline",
  baseId: "letter-i-small-outline",
  variant: "default",
  name: "Letter I Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterISmallOutlineLogo;
