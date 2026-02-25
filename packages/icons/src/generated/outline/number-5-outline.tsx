/**
 * Auto-generated logo component: Number 5 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number5OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number5OutlineLogo = React.forwardRef<SVGSVGElement, Number5OutlineLogoProps>(
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
      <path d="M8 20h4a4 4 0 1 0 0 -8h-4v-8h8" />
    </svg>
  )
);

Number5OutlineLogo.displayName = "Number5OutlineLogo";

export const Number5OutlineLogoMetadata = {
  id: "number-5-outline",
  baseId: "number-5-outline",
  variant: "default",
  name: "Number 5 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number5OutlineLogo;
