/**
 * Auto-generated logo component: Filter 2 Pause Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2PauseOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2PauseOutlineLogo = React.forwardRef<SVGSVGElement, Filter2PauseOutlineLogoProps>(
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
      <path d="M4 6h16" />
  <path d="M6 12h12" />
  <path d="M9 18h4" />
  <path d="M17 17v5" />
  <path d="M21 17v5" />
    </svg>
  )
);

Filter2PauseOutlineLogo.displayName = "Filter2PauseOutlineLogo";

export const Filter2PauseOutlineLogoMetadata = {
  id: "filter-2-pause-outline",
  baseId: "filter-2-pause-outline",
  variant: "default",
  name: "Filter 2 Pause Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2PauseOutlineLogo;
