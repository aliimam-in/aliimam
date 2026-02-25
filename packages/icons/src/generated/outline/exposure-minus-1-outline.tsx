/**
 * Auto-generated logo component: Exposure Minus 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ExposureMinus1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ExposureMinus1OutlineLogo = React.forwardRef<SVGSVGElement, ExposureMinus1OutlineLogoProps>(
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
      <path d="M3 12h6" />
  <path d="M18 19v-14l-4 4" />
    </svg>
  )
);

ExposureMinus1OutlineLogo.displayName = "ExposureMinus1OutlineLogo";

export const ExposureMinus1OutlineLogoMetadata = {
  id: "exposure-minus-1-outline",
  baseId: "exposure-minus-1-outline",
  variant: "default",
  name: "Exposure Minus 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ExposureMinus1OutlineLogo;
