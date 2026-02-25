/**
 * Auto-generated logo component: Circle Letter V Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterVOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterVOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterVOutlineLogoProps>(
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
  <path d="M10 8l2 8l2 -8" />
    </svg>
  )
);

CircleLetterVOutlineLogo.displayName = "CircleLetterVOutlineLogo";

export const CircleLetterVOutlineLogoMetadata = {
  id: "circle-letter-v-outline",
  baseId: "circle-letter-v-outline",
  variant: "default",
  name: "Circle Letter V Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterVOutlineLogo;
