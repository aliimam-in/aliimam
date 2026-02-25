/**
 * Auto-generated logo component: Luggage Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LuggageOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LuggageOffOutlineLogo = React.forwardRef<SVGSVGElement, LuggageOffOutlineLogoProps>(
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
      <path d="M10 6h6a2 2 0 0 1 2 2v6m0 4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-10c0 -.546 .218 -1.04 .573 -1.4" />
  <path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
  <path d="M6 10h4m4 0h4" />
  <path d="M6 16h10" />
  <path d="M9 20v1" />
  <path d="M15 20v1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

LuggageOffOutlineLogo.displayName = "LuggageOffOutlineLogo";

export const LuggageOffOutlineLogoMetadata = {
  id: "luggage-off-outline",
  baseId: "luggage-off-outline",
  variant: "default",
  name: "Luggage Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LuggageOffOutlineLogo;
