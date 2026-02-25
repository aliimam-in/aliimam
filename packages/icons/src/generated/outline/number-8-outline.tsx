/**
 * Auto-generated logo component: Number 8 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number8OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number8OutlineLogo = React.forwardRef<SVGSVGElement, Number8OutlineLogoProps>(
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
      <path d="M8 8a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
  <path d="M8 16a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    </svg>
  )
);

Number8OutlineLogo.displayName = "Number8OutlineLogo";

export const Number8OutlineLogoMetadata = {
  id: "number-8-outline",
  baseId: "number-8-outline",
  variant: "default",
  name: "Number 8 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number8OutlineLogo;
