/**
 * Auto-generated logo component: Uhd Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface UhdOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const UhdOutlineLogo = React.forwardRef<SVGSVGElement, UhdOutlineLogoProps>(
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
      <path d="M10 16v-8" />
  <path d="M10 12h4" />
  <path d="M14 8v8" />
  <path d="M17 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2l-2 0" />
  <path d="M3 8v6a2 2 0 1 0 4 0v-6" />
    </svg>
  )
);

UhdOutlineLogo.displayName = "UhdOutlineLogo";

export const UhdOutlineLogoMetadata = {
  id: "uhd-outline",
  baseId: "uhd-outline",
  variant: "default",
  name: "Uhd Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default UhdOutlineLogo;
