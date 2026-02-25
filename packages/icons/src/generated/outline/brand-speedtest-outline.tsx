/**
 * Auto-generated logo component: Brand Speedtest Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BrandSpeedtestOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BrandSpeedtestOutlineLogo = React.forwardRef<SVGSVGElement, BrandSpeedtestOutlineLogoProps>(
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
      <path d="M5.636 19.364a9 9 0 1 1 12.728 0" />
  <path d="M16 9l-4 4" />
    </svg>
  )
);

BrandSpeedtestOutlineLogo.displayName = "BrandSpeedtestOutlineLogo";

export const BrandSpeedtestOutlineLogoMetadata = {
  id: "brand-speedtest-outline",
  baseId: "brand-speedtest-outline",
  variant: "default",
  name: "Brand Speedtest Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BrandSpeedtestOutlineLogo;
