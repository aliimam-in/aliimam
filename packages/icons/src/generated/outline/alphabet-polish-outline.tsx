/**
 * Auto-generated logo component: Alphabet Polish Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AlphabetPolishOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AlphabetPolishOutlineLogo = React.forwardRef<SVGSVGElement, AlphabetPolishOutlineLogoProps>(
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
      <path d="M7 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3" />
  <path d="M16 7v10" />
  <path d="M18 11l-4 2" />
  <path d="M10.5 17a1.5 1.5 0 0 0 0 3" />
    </svg>
  )
);

AlphabetPolishOutlineLogo.displayName = "AlphabetPolishOutlineLogo";

export const AlphabetPolishOutlineLogoMetadata = {
  id: "alphabet-polish-outline",
  baseId: "alphabet-polish-outline",
  variant: "default",
  name: "Alphabet Polish Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AlphabetPolishOutlineLogo;
