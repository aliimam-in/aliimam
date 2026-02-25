/**
 * Auto-generated logo component: Shield Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldPauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldPauseOutlineLogo = React.forwardRef<SVGSVGElement, ShieldPauseOutlineLogoProps>(
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
      <path d="M13.004 20.692c-.329 .117 -.664 .22 -1.004 .308a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.081 7.034" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

ShieldPauseOutlineLogo.displayName = "ShieldPauseOutlineLogo";

export const ShieldPauseOutlineLogoMetadata = {
  id: "shield-pause-outline",
  baseId: "shield-pause-outline",
  variant: "default",
  name: "Shield Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldPauseOutlineLogo;
