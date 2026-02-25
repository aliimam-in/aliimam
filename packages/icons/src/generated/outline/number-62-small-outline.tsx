/**
 * Auto-generated logo component: Number 62 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number62SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number62SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number62SmallOutlineLogoProps>(
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
      <path d="M14 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
  <path d="M10 9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" />
    </svg>
  )
);

Number62SmallOutlineLogo.displayName = "Number62SmallOutlineLogo";

export const Number62SmallOutlineLogoMetadata = {
  id: "number-62-small-outline",
  baseId: "number-62-small-outline",
  variant: "default",
  name: "Number 62 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number62SmallOutlineLogo;
