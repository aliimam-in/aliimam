/**
 * Auto-generated logo component: Backpack Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BackpackOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BackpackOutlineLogo = React.forwardRef<SVGSVGElement, BackpackOutlineLogoProps>(
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
      <path d="M5 18v-6a6 6 0 0 1 6 -6h2a6 6 0 0 1 6 6v6a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3" />
  <path d="M10 6v-1a2 2 0 1 1 4 0v1" />
  <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
  <path d="M11 10h2" />
    </svg>
  )
);

BackpackOutlineLogo.displayName = "BackpackOutlineLogo";

export const BackpackOutlineLogoMetadata = {
  id: "backpack-outline",
  baseId: "backpack-outline",
  variant: "default",
  name: "Backpack Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BackpackOutlineLogo;
