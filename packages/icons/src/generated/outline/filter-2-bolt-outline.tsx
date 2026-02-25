/**
 * Auto-generated logo component: Filter 2 Bolt Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2BoltOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2BoltOutlineLogo = React.forwardRef<SVGSVGElement, Filter2BoltOutlineLogoProps>(
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
  <path d="M19 16l-2 3h4l-2 3" />
    </svg>
  )
);

Filter2BoltOutlineLogo.displayName = "Filter2BoltOutlineLogo";

export const Filter2BoltOutlineLogoMetadata = {
  id: "filter-2-bolt-outline",
  baseId: "filter-2-bolt-outline",
  variant: "default",
  name: "Filter 2 Bolt Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2BoltOutlineLogo;
