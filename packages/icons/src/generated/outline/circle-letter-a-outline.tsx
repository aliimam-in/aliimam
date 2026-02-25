/**
 * Auto-generated logo component: Circle Letter A Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterAOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterAOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterAOutlineLogoProps>(
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
  <path d="M10 16v-6a2 2 0 1 1 4 0v6" />
  <path d="M10 13h4" />
    </svg>
  )
);

CircleLetterAOutlineLogo.displayName = "CircleLetterAOutlineLogo";

export const CircleLetterAOutlineLogoMetadata = {
  id: "circle-letter-a-outline",
  baseId: "circle-letter-a-outline",
  variant: "default",
  name: "Circle Letter A Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterAOutlineLogo;
