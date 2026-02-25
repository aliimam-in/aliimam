/**
 * Auto-generated logo component: Letter W Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterWOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterWOutlineLogo = React.forwardRef<SVGSVGElement, LetterWOutlineLogoProps>(
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
      <path d="M4 4l4 16l4 -14l4 14l4 -16" />
    </svg>
  )
);

LetterWOutlineLogo.displayName = "LetterWOutlineLogo";

export const LetterWOutlineLogoMetadata = {
  id: "letter-w-outline",
  baseId: "letter-w-outline",
  variant: "default",
  name: "Letter W Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterWOutlineLogo;
