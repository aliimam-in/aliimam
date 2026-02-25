/**
 * Auto-generated logo component: Circle Letter W Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterWOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterWOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterWOutlineLogoProps>(
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
  <path d="M9 8l1 8l2 -5l2 5l1 -8" />
    </svg>
  )
);

CircleLetterWOutlineLogo.displayName = "CircleLetterWOutlineLogo";

export const CircleLetterWOutlineLogoMetadata = {
  id: "circle-letter-w-outline",
  baseId: "circle-letter-w-outline",
  variant: "default",
  name: "Circle Letter W Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterWOutlineLogo;
