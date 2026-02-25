/**
 * Auto-generated logo component: Circle Letter D Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterDOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterDOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterDOutlineLogoProps>(
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
  <path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2" />
    </svg>
  )
);

CircleLetterDOutlineLogo.displayName = "CircleLetterDOutlineLogo";

export const CircleLetterDOutlineLogoMetadata = {
  id: "circle-letter-d-outline",
  baseId: "circle-letter-d-outline",
  variant: "default",
  name: "Circle Letter D Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterDOutlineLogo;
