/**
 * Auto-generated logo component: Letter Q Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LetterQSmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LetterQSmallOutlineLogo = React.forwardRef<SVGSVGElement, LetterQSmallOutlineLogoProps>(
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
      <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
  <path d="M13 15l1 1" />
    </svg>
  )
);

LetterQSmallOutlineLogo.displayName = "LetterQSmallOutlineLogo";

export const LetterQSmallOutlineLogoMetadata = {
  id: "letter-q-small-outline",
  baseId: "letter-q-small-outline",
  variant: "default",
  name: "Letter Q Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LetterQSmallOutlineLogo;
