/**
 * Auto-generated logo component: Number 11 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number11OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number11OutlineLogo = React.forwardRef<SVGSVGElement, Number11OutlineLogoProps>(
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
      <path d="M8 20v-16l-5 5" />
  <path d="M18 20v-16l-5 5" />
    </svg>
  )
);

Number11OutlineLogo.displayName = "Number11OutlineLogo";

export const Number11OutlineLogoMetadata = {
  id: "number-11-outline",
  baseId: "number-11-outline",
  variant: "default",
  name: "Number 11 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number11OutlineLogo;
