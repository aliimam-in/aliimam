/**
 * Auto-generated logo component: Number 4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number4OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number4OutlineLogo = React.forwardRef<SVGSVGElement, Number4OutlineLogoProps>(
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
      <path d="M15 20v-15l-8 11h10" />
    </svg>
  )
);

Number4OutlineLogo.displayName = "Number4OutlineLogo";

export const Number4OutlineLogoMetadata = {
  id: "number-4-outline",
  baseId: "number-4-outline",
  variant: "default",
  name: "Number 4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number4OutlineLogo;
