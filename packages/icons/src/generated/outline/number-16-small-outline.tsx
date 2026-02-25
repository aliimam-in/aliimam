/**
 * Auto-generated logo component: Number 16 Small Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Number16SmallOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Number16SmallOutlineLogo = React.forwardRef<SVGSVGElement, Number16SmallOutlineLogoProps>(
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
      <path d="M8 8h1v8" />
  <path d="M17 9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3" />
    </svg>
  )
);

Number16SmallOutlineLogo.displayName = "Number16SmallOutlineLogo";

export const Number16SmallOutlineLogoMetadata = {
  id: "number-16-small-outline",
  baseId: "number-16-small-outline",
  variant: "default",
  name: "Number 16 Small Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Number16SmallOutlineLogo;
