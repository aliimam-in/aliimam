/**
 * Auto-generated logo component: Number 10 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number10OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number10OutlineLogo = React.forwardRef<SVGSVGElement, Number10OutlineLogoProps>(
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
  <path d="M16 20a4 4 0 0 0 4 -4v-8a4 4 0 1 0 -8 0v8a4 4 0 0 0 4 4" />
    </svg>
  )
);

Number10OutlineLogo.displayName = "Number10OutlineLogo";

export const Number10OutlineLogoMetadata = {
  id: "number-10-outline",
  baseId: "number-10-outline",
  variant: "default",
  name: "Number 10 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number10OutlineLogo;
