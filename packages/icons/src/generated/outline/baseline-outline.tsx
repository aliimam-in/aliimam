/**
 * Auto-generated logo component: Baseline Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BaselineOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BaselineOutlineLogo = React.forwardRef<SVGSVGElement, BaselineOutlineLogoProps>(
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
      <path d="M4 20h16" />
  <path d="M8 16v-8a4 4 0 1 1 8 0v8" />
  <path d="M8 10h8" />
    </svg>
  )
);

BaselineOutlineLogo.displayName = "BaselineOutlineLogo";

export const BaselineOutlineLogoMetadata = {
  id: "baseline-outline",
  baseId: "baseline-outline",
  variant: "default",
  name: "Baseline Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BaselineOutlineLogo;
