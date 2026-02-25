/**
 * Auto-generated logo component: Circle Letter K Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterKOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterKOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterKOutlineLogoProps>(
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
  <path d="M10 8v8" />
  <path d="M14 8l-2.5 4l2.5 4" />
  <path d="M10 12h1.5" />
    </svg>
  )
);

CircleLetterKOutlineLogo.displayName = "CircleLetterKOutlineLogo";

export const CircleLetterKOutlineLogoMetadata = {
  id: "circle-letter-k-outline",
  baseId: "circle-letter-k-outline",
  variant: "default",
  name: "Circle Letter K Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterKOutlineLogo;
