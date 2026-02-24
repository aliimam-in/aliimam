/**
 * Auto-generated logo component: Shield (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldLogo = React.forwardRef<SVGSVGElement, ShieldLogoProps>(
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
);

ShieldLogo.displayName = "ShieldLogo";

export const ShieldLogoMetadata = {
  id: "shield",
  baseId: "shield",
  variant: "default",
  name: "Shield",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldLogo;
