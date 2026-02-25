/**
 * Auto-generated logo component: Letter V Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterVOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterVOutlineLogo = React.forwardRef<SVGSVGElement, LetterVOutlineLogoProps>(
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
      <path d="M6 4l6 16l6 -16" />
    </svg>
  )
);

LetterVOutlineLogo.displayName = "LetterVOutlineLogo";

export const LetterVOutlineLogoMetadata = {
  id: "letter-v-outline",
  baseId: "letter-v-outline",
  variant: "default",
  name: "Letter V Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterVOutlineLogo;
