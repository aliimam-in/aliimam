/**
 * Auto-generated logo component: Circle Letter J Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterJOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterJOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterJOutlineLogoProps>(
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
  <path d="M10 8h4v6a2 2 0 1 1 -4 0" />
    </svg>
  )
);

CircleLetterJOutlineLogo.displayName = "CircleLetterJOutlineLogo";

export const CircleLetterJOutlineLogoMetadata = {
  id: "circle-letter-j-outline",
  baseId: "circle-letter-j-outline",
  variant: "default",
  name: "Circle Letter J Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterJOutlineLogo;
