/**
 * Auto-generated logo component: Number 5 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number5SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number5SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number5SmallOutlineLogoProps>(
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
      <path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3v-4h4" />
    </svg>
  )
);

Number5SmallOutlineLogo.displayName = "Number5SmallOutlineLogo";

export const Number5SmallOutlineLogoMetadata = {
  id: "number-5-small-outline",
  baseId: "number-5-small-outline",
  variant: "default",
  name: "Number 5 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number5SmallOutlineLogo;
