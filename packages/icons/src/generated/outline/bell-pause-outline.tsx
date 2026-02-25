/**
 * Auto-generated logo component: Bell Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BellPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BellPauseOutlineLogo = React.forwardRef<SVGSVGElement, BellPauseOutlineLogoProps>(
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
      <path d="M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" />
  <path d="M9 17v1a3 3 0 0 0 4.022 2.821" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

BellPauseOutlineLogo.displayName = "BellPauseOutlineLogo";

export const BellPauseOutlineLogoMetadata = {
  id: "bell-pause-outline",
  baseId: "bell-pause-outline",
  variant: "default",
  name: "Bell Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BellPauseOutlineLogo;
