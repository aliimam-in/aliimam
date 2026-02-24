/**
 * Auto-generated logo component: Minimize 2 (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Minimize2LogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Minimize2Logo = React.forwardRef<SVGSVGElement, Minimize2LogoProps>(
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
      <polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/>
    </svg>
  )
);

Minimize2Logo.displayName = "Minimize2Logo";

export const Minimize2LogoMetadata = {
  id: "minimize-2",
  baseId: "minimize-2",
  variant: "default",
  name: "Minimize 2",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Minimize2Logo;
