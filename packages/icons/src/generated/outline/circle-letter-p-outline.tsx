/**
 * Auto-generated logo component: Circle Letter P Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLetterPOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLetterPOutlineLogo = React.forwardRef<SVGSVGElement, CircleLetterPOutlineLogoProps>(
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
  <path d="M10 12h2a2 2 0 1 0 0 -4h-2v8" />
    </svg>
  )
);

CircleLetterPOutlineLogo.displayName = "CircleLetterPOutlineLogo";

export const CircleLetterPOutlineLogoMetadata = {
  id: "circle-letter-p-outline",
  baseId: "circle-letter-p-outline",
  variant: "default",
  name: "Circle Letter P Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLetterPOutlineLogo;
