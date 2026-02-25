/**
 * Auto-generated logo component: Space Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SpaceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SpaceOutlineLogo = React.forwardRef<SVGSVGElement, SpaceOutlineLogoProps>(
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
      <path d="M4 10v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1 -1v-3" />
    </svg>
  )
);

SpaceOutlineLogo.displayName = "SpaceOutlineLogo";

export const SpaceOutlineLogoMetadata = {
  id: "space-outline",
  baseId: "space-outline",
  variant: "default",
  name: "Space Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SpaceOutlineLogo;
