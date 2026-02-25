/**
 * Auto-generated logo component: Letter Y Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterYSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterYSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterYSmallOutlineLogoProps>(
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
      <path d="M10 8l2 5l2 -5" />
  <path d="M12 16v-3" />
    </svg>
  )
);

LetterYSmallOutlineLogo.displayName = "LetterYSmallOutlineLogo";

export const LetterYSmallOutlineLogoMetadata = {
  id: "letter-y-small-outline",
  baseId: "letter-y-small-outline",
  variant: "default",
  name: "Letter Y Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterYSmallOutlineLogo;
