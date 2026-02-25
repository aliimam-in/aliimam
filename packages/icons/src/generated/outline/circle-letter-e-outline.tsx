/**
 * Auto-generated logo component: Circle Letter E Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterEOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterEOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterEOutlineLogoProps>(
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
  <path d="M14 8h-4v8h4" />
  <path d="M10 12h2.5" />
    </svg>
  )
);

CircleLetterEOutlineLogo.displayName = "CircleLetterEOutlineLogo";

export const CircleLetterEOutlineLogoMetadata = {
  id: "circle-letter-e-outline",
  baseId: "circle-letter-e-outline",
  variant: "default",
  name: "Circle Letter E Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterEOutlineLogo;
