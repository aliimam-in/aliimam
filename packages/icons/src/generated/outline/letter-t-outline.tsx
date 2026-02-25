/**
 * Auto-generated logo component: Letter T Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterTOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterTOutlineLogo = React.forwardRef<SVGSVGElement, LetterTOutlineLogoProps>(
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
      <path d="M6 4l12 0" />
  <path d="M12 4l0 16" />
    </svg>
  )
);

LetterTOutlineLogo.displayName = "LetterTOutlineLogo";

export const LetterTOutlineLogoMetadata = {
  id: "letter-t-outline",
  baseId: "letter-t-outline",
  variant: "default",
  name: "Letter T Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterTOutlineLogo;
