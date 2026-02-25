/**
 * Auto-generated logo component: Baseline (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BaselineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BaselineLogo = React.forwardRef<SVGSVGElement, BaselineLogoProps>(
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
  <path d="m6 16 6-12 6 12" />
  <path d="M8 12h8" />
    </svg>
  )
);

BaselineLogo.displayName = "BaselineLogo";

export const BaselineLogoMetadata = {
  id: "baseline",
  baseId: "baseline",
  variant: "default",
  name: "Baseline",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BaselineLogo;
