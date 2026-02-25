/**
 * Auto-generated logo component: Braille Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrailleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrailleOutlineLogo = React.forwardRef<SVGSVGElement, BrailleOutlineLogoProps>(
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
      <path d="M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M16 12h.01" />
  <path d="M8 12h.01" />
  <path d="M16 19h.01" />
    </svg>
  )
);

BrailleOutlineLogo.displayName = "BrailleOutlineLogo";

export const BrailleOutlineLogoMetadata = {
  id: "braille-outline",
  baseId: "braille-outline",
  variant: "default",
  name: "Braille Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrailleOutlineLogo;
