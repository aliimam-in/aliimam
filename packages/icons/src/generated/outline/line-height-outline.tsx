/**
 * Auto-generated logo component: Line Height Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LineHeightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LineHeightOutlineLogo = React.forwardRef<SVGSVGElement, LineHeightOutlineLogoProps>(
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
      <path d="M3 8l3 -3l3 3" />
  <path d="M3 16l3 3l3 -3" />
  <path d="M6 5l0 14" />
  <path d="M13 6l7 0" />
  <path d="M13 12l7 0" />
  <path d="M13 18l7 0" />
    </svg>
  )
);

LineHeightOutlineLogo.displayName = "LineHeightOutlineLogo";

export const LineHeightOutlineLogoMetadata = {
  id: "line-height-outline",
  baseId: "line-height-outline",
  variant: "default",
  name: "Line Height Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LineHeightOutlineLogo;
