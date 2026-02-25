/**
 * Auto-generated logo component: Letter I Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterIOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterIOutlineLogo = React.forwardRef<SVGSVGElement, LetterIOutlineLogoProps>(
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
      <path d="M12 4l0 16" />
    </svg>
  )
);

LetterIOutlineLogo.displayName = "LetterIOutlineLogo";

export const LetterIOutlineLogoMetadata = {
  id: "letter-i-outline",
  baseId: "letter-i-outline",
  variant: "default",
  name: "Letter I Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterIOutlineLogo;
