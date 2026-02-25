/**
 * Auto-generated logo component: Letter P Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterPOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterPOutlineLogo = React.forwardRef<SVGSVGElement, LetterPOutlineLogoProps>(
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
    </svg>
  )
);

LetterPOutlineLogo.displayName = "LetterPOutlineLogo";

export const LetterPOutlineLogoMetadata = {
  id: "letter-p-outline",
  baseId: "letter-p-outline",
  variant: "default",
  name: "Letter P Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterPOutlineLogo;
