/**
 * Auto-generated logo component: Space Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpaceOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpaceOffOutlineLogo = React.forwardRef<SVGSVGElement, SpaceOffOutlineLogoProps>(
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
      <path d="M4 10v3a1 1 0 0 0 1 1h9m4 0h1a1 1 0 0 0 1 -1v-3" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SpaceOffOutlineLogo.displayName = "SpaceOffOutlineLogo";

export const SpaceOffOutlineLogoMetadata = {
  id: "space-off-outline",
  baseId: "space-off-outline",
  variant: "default",
  name: "Space Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpaceOffOutlineLogo;
