/**
 * Auto-generated logo component: Filter 2 Cog Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Filter2CogOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Filter2CogOutlineLogo = React.forwardRef<SVGSVGElement, Filter2CogOutlineLogoProps>(
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
  <path d="M9 18h3" />
  <path d="M19.001 21c-.53 0 -1.039 -.211 -1.414 -.586c-.375 -.375 -.586 -.884 -.586 -1.414c0 -.53 .211 -1.039 .586 -1.414c.375 -.375 .884 -.586 1.414 -.586m0 4c.53 0 1.039 -.211 1.414 -.586c.375 -.375 .586 -.884 .586 -1.414c0 -.53 -.211 -1.039 -.586 -1.414c-.375 -.375 -.884 -.586 -1.414 -.586m0 4v1.5m0 -5.5v-1.5m3.031 1.75l-1.299 .75m-3.463 2l-1.3 .75m0 -3.5l1.3 .75m3.463 2l1.3 .75" />
    </svg>
  )
);

Filter2CogOutlineLogo.displayName = "Filter2CogOutlineLogo";

export const Filter2CogOutlineLogoMetadata = {
  id: "filter-2-cog-outline",
  baseId: "filter-2-cog-outline",
  variant: "default",
  name: "Filter 2 Cog Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Filter2CogOutlineLogo;
