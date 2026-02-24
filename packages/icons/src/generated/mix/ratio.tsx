/**
 * Auto-generated logo component: Ratio (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RatioLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RatioLogo = React.forwardRef<SVGSVGElement, RatioLogoProps>(
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
      <rect width="12" height="20" x="6" y="2" rx="2" />
  <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
);

RatioLogo.displayName = "RatioLogo";

export const RatioLogoMetadata = {
  id: "ratio",
  baseId: "ratio",
  variant: "default",
  name: "Ratio",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RatioLogo;
