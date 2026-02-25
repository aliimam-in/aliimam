/**
 * Auto-generated logo component: Number 94 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number94SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number94SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number94SmallOutlineLogoProps>(
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
      <path d="M14 8v3a1 1 0 0 0 1 1h3" />
  <path d="M18 8v8" />
  <path d="M6 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
    </svg>
  )
);

Number94SmallOutlineLogo.displayName = "Number94SmallOutlineLogo";

export const Number94SmallOutlineLogoMetadata = {
  id: "number-94-small-outline",
  baseId: "number-94-small-outline",
  variant: "default",
  name: "Number 94 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number94SmallOutlineLogo;
