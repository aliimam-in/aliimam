/**
 * Auto-generated logo component: Circle Letter X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterXOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterXOutlineLogoProps>(
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
  <path d="M10 8l4 8" />
  <path d="M10 16l4 -8" />
    </svg>
  )
);

CircleLetterXOutlineLogo.displayName = "CircleLetterXOutlineLogo";

export const CircleLetterXOutlineLogoMetadata = {
  id: "circle-letter-x-outline",
  baseId: "circle-letter-x-outline",
  variant: "default",
  name: "Circle Letter X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterXOutlineLogo;
