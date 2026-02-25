/**
 * Auto-generated logo component: Number 51 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number51SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number51SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number51SmallOutlineLogoProps>(
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
      <path d="M15 8h1v8" />
  <path d="M7 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3v-4h4" />
    </svg>
  )
);

Number51SmallOutlineLogo.displayName = "Number51SmallOutlineLogo";

export const Number51SmallOutlineLogoMetadata = {
  id: "number-51-small-outline",
  baseId: "number-51-small-outline",
  variant: "default",
  name: "Number 51 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number51SmallOutlineLogo;
