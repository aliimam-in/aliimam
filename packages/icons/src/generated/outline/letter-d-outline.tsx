/**
 * Auto-generated logo component: Letter D Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterDOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterDOutlineLogo = React.forwardRef<SVGSVGElement, LetterDOutlineLogoProps>(
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
      <path d="M7 4h6a5 5 0 0 1 5 5v6a5 5 0 0 1 -5 5h-6v-16" />
    </svg>
  )
);

LetterDOutlineLogo.displayName = "LetterDOutlineLogo";

export const LetterDOutlineLogoMetadata = {
  id: "letter-d-outline",
  baseId: "letter-d-outline",
  variant: "default",
  name: "Letter D Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterDOutlineLogo;
