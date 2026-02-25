/**
 * Auto-generated logo component: Walk Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WalkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WalkOutlineLogo = React.forwardRef<SVGSVGElement, WalkOutlineLogoProps>(
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
      <path d="M12 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M7 21l3 -4" />
  <path d="M16 21l-2 -4l-3 -3l1 -6" />
  <path d="M6 12l2 -3l4 -1l3 3l3 1" />
    </svg>
  )
);

WalkOutlineLogo.displayName = "WalkOutlineLogo";

export const WalkOutlineLogoMetadata = {
  id: "walk-outline",
  baseId: "walk-outline",
  variant: "default",
  name: "Walk Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WalkOutlineLogo;
