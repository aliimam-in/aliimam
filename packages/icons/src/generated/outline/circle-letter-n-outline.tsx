/**
 * Auto-generated logo component: Circle Letter N Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterNOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterNOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterNOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M10 16v-8l4 8v-8" />
    </svg>
  )
);

CircleLetterNOutlineLogo.displayName = "CircleLetterNOutlineLogo";

export const CircleLetterNOutlineLogoMetadata = {
  id: "circle-letter-n-outline",
  baseId: "circle-letter-n-outline",
  variant: "default",
  name: "Circle Letter N Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterNOutlineLogo;
