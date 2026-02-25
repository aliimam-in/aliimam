/**
 * Auto-generated logo component: Luggage Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LuggageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LuggageOutlineLogo = React.forwardRef<SVGSVGElement, LuggageOutlineLogoProps>(
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
      <path d="M6 8a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -10" />
  <path d="M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
  <path d="M6 10h12" />
  <path d="M6 16h12" />
  <path d="M9 20v1" />
  <path d="M15 20v1" />
    </svg>
  )
);

LuggageOutlineLogo.displayName = "LuggageOutlineLogo";

export const LuggageOutlineLogoMetadata = {
  id: "luggage-outline",
  baseId: "luggage-outline",
  variant: "default",
  name: "Luggage Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LuggageOutlineLogo;
