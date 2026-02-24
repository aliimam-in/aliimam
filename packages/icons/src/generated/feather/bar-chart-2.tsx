/**
 * Auto-generated logo component: Bar Chart 2 (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BarChart2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BarChart2Logo = React.forwardRef<SVGSVGElement, BarChart2LogoProps>(
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
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
  )
);

BarChart2Logo.displayName = "BarChart2Logo";

export const BarChart2LogoMetadata = {
  id: "bar-chart-2",
  baseId: "bar-chart-2",
  variant: "default",
  name: "Bar Chart 2",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BarChart2Logo;
