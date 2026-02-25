/**
 * Auto-generated logo component: Circle Letter U Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterUOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterUOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterUOutlineLogoProps>(
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
  <path d="M10 8v6a2 2 0 1 0 4 0v-6" />
    </svg>
  )
);

CircleLetterUOutlineLogo.displayName = "CircleLetterUOutlineLogo";

export const CircleLetterUOutlineLogoMetadata = {
  id: "circle-letter-u-outline",
  baseId: "circle-letter-u-outline",
  variant: "default",
  name: "Circle Letter U Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterUOutlineLogo;
