/**
 * Auto-generated logo component: Circle Letter M Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterMOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterMOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterMOutlineLogoProps>(
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
  <path d="M9 16v-8l3 5l3 -5v8" />
    </svg>
  )
);

CircleLetterMOutlineLogo.displayName = "CircleLetterMOutlineLogo";

export const CircleLetterMOutlineLogoMetadata = {
  id: "circle-letter-m-outline",
  baseId: "circle-letter-m-outline",
  variant: "default",
  name: "Circle Letter M Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterMOutlineLogo;
