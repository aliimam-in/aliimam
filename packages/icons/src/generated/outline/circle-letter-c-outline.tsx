/**
 * Auto-generated logo component: Circle Letter C Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterCOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterCOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterCOutlineLogoProps>(
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
  <path d="M14 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
    </svg>
  )
);

CircleLetterCOutlineLogo.displayName = "CircleLetterCOutlineLogo";

export const CircleLetterCOutlineLogoMetadata = {
  id: "circle-letter-c-outline",
  baseId: "circle-letter-c-outline",
  variant: "default",
  name: "Circle Letter C Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterCOutlineLogo;
