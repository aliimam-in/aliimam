/**
 * Auto-generated logo component: Ruler Dimension Line (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RulerDimensionLineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RulerDimensionLineLogo = React.forwardRef<SVGSVGElement, RulerDimensionLineLogoProps>(
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
      <path d="M10 15v-3" />
  <path d="M14 15v-3" />
  <path d="M18 15v-3" />
  <path d="M2 8V4" />
  <path d="M22 6H2" />
  <path d="M22 8V4" />
  <path d="M6 15v-3" />
  <rect x="2" y="12" width="20" height="8" rx="2" />
    </svg>
  )
);

RulerDimensionLineLogo.displayName = "RulerDimensionLineLogo";

export const RulerDimensionLineLogoMetadata = {
  id: "ruler-dimension-line",
  baseId: "ruler-dimension-line",
  variant: "default",
  name: "Ruler Dimension Line",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RulerDimensionLineLogo;
