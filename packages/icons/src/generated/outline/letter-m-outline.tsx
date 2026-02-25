/**
 * Auto-generated logo component: Letter M Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterMOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterMOutlineLogo = React.forwardRef<SVGSVGElement, LetterMOutlineLogoProps>(
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
      <path d="M6 20v-16l6 14l6 -14v16" />
    </svg>
  )
);

LetterMOutlineLogo.displayName = "LetterMOutlineLogo";

export const LetterMOutlineLogoMetadata = {
  id: "letter-m-outline",
  baseId: "letter-m-outline",
  variant: "default",
  name: "Letter M Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterMOutlineLogo;
