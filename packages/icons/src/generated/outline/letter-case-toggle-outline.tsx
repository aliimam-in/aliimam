/**
 * Auto-generated logo component: Letter Case Toggle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterCaseToggleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterCaseToggleOutlineLogo = React.forwardRef<SVGSVGElement, LetterCaseToggleOutlineLogoProps>(
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
      <path d="M3 15.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
  <path d="M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
  <path d="M14 13h7" />
  <path d="M10 12v7" />
    </svg>
  )
);

LetterCaseToggleOutlineLogo.displayName = "LetterCaseToggleOutlineLogo";

export const LetterCaseToggleOutlineLogoMetadata = {
  id: "letter-case-toggle-outline",
  baseId: "letter-case-toggle-outline",
  variant: "default",
  name: "Letter Case Toggle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterCaseToggleOutlineLogo;
