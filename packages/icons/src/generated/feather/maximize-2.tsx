/**
 * Auto-generated logo component: Maximize 2 (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Maximize2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Maximize2Logo = React.forwardRef<SVGSVGElement, Maximize2LogoProps>(
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
      <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
    </svg>
  )
);

Maximize2Logo.displayName = "Maximize2Logo";

export const Maximize2LogoMetadata = {
  id: "maximize-2",
  baseId: "maximize-2",
  variant: "default",
  name: "Maximize 2",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Maximize2Logo;
