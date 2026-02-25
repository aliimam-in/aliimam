/**
 * Auto-generated logo component: Letter E Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterEOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterEOutlineLogo = React.forwardRef<SVGSVGElement, LetterEOutlineLogoProps>(
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
      <path d="M17 4h-10v16h10" />
  <path d="M7 12l8 0" />
    </svg>
  )
);

LetterEOutlineLogo.displayName = "LetterEOutlineLogo";

export const LetterEOutlineLogoMetadata = {
  id: "letter-e-outline",
  baseId: "letter-e-outline",
  variant: "default",
  name: "Letter E Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterEOutlineLogo;
