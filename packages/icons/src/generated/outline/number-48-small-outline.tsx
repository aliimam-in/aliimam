/**
 * Auto-generated logo component: Number 48 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number48SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number48SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number48SmallOutlineLogoProps>(
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
      <path d="M16 12h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1" />
  <path d="M6 8v3a1 1 0 0 0 1 1h3" />
  <path d="M10 8v8" />
    </svg>
  )
);

Number48SmallOutlineLogo.displayName = "Number48SmallOutlineLogo";

export const Number48SmallOutlineLogoMetadata = {
  id: "number-48-small-outline",
  baseId: "number-48-small-outline",
  variant: "default",
  name: "Number 48 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number48SmallOutlineLogo;
