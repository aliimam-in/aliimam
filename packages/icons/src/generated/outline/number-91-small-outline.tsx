/**
 * Auto-generated logo component: Number 91 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number91SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number91SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number91SmallOutlineLogoProps>(
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
  <path d="M7 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-6a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
    </svg>
  )
);

Number91SmallOutlineLogo.displayName = "Number91SmallOutlineLogo";

export const Number91SmallOutlineLogoMetadata = {
  id: "number-91-small-outline",
  baseId: "number-91-small-outline",
  variant: "default",
  name: "Number 91 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number91SmallOutlineLogo;
