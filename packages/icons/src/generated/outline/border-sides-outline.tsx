/**
 * Auto-generated logo component: Border Sides Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BorderSidesOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BorderSidesOutlineLogo = React.forwardRef<SVGSVGElement, BorderSidesOutlineLogoProps>(
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
      <path d="M4 8v8" />
  <path d="M20 16v-8" />
  <path d="M8 4h8" />
  <path d="M8 20h8" />
    </svg>
  )
);

BorderSidesOutlineLogo.displayName = "BorderSidesOutlineLogo";

export const BorderSidesOutlineLogoMetadata = {
  id: "border-sides-outline",
  baseId: "border-sides-outline",
  variant: "default",
  name: "Border Sides Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BorderSidesOutlineLogo;
