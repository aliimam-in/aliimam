/**
 * Auto-generated logo component: Circle Letter B Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterBOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterBOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterBOutlineLogoProps>(
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
  <path d="M10 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8" />
    </svg>
  )
);

CircleLetterBOutlineLogo.displayName = "CircleLetterBOutlineLogo";

export const CircleLetterBOutlineLogoMetadata = {
  id: "circle-letter-b-outline",
  baseId: "circle-letter-b-outline",
  variant: "default",
  name: "Circle Letter B Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterBOutlineLogo;
