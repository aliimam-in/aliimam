/**
 * Auto-generated logo component: Circle Letter G Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterGOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterGOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterGOutlineLogoProps>(
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
  <path d="M14 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
    </svg>
  )
);

CircleLetterGOutlineLogo.displayName = "CircleLetterGOutlineLogo";

export const CircleLetterGOutlineLogoMetadata = {
  id: "circle-letter-g-outline",
  baseId: "circle-letter-g-outline",
  variant: "default",
  name: "Circle Letter G Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterGOutlineLogo;
