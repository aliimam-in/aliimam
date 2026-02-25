/**
 * Auto-generated logo component: Circle Letter Q Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterQOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterQOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterQOutlineLogoProps>(
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
  <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2" />
  <path d="M13 15l1 1" />
    </svg>
  )
);

CircleLetterQOutlineLogo.displayName = "CircleLetterQOutlineLogo";

export const CircleLetterQOutlineLogoMetadata = {
  id: "circle-letter-q-outline",
  baseId: "circle-letter-q-outline",
  variant: "default",
  name: "Circle Letter Q Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterQOutlineLogo;
