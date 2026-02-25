/**
 * Auto-generated logo component: Letter O Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterOSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterOSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterOSmallOutlineLogoProps>(
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
      <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
    </svg>
  )
);

LetterOSmallOutlineLogo.displayName = "LetterOSmallOutlineLogo";

export const LetterOSmallOutlineLogoMetadata = {
  id: "letter-o-small-outline",
  baseId: "letter-o-small-outline",
  variant: "default",
  name: "Letter O Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterOSmallOutlineLogo;
