/**
 * Auto-generated logo component: Line Dashed Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface LineDashedOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const LineDashedOutlineLogo = React.forwardRef<SVGSVGElement, LineDashedOutlineLogoProps>(
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
      <path d="M5 12h2" />
  <path d="M17 12h2" />
  <path d="M11 12h2" />
    </svg>
  )
);

LineDashedOutlineLogo.displayName = "LineDashedOutlineLogo";

export const LineDashedOutlineLogoMetadata = {
  id: "line-dashed-outline",
  baseId: "line-dashed-outline",
  variant: "default",
  name: "Line Dashed Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default LineDashedOutlineLogo;
