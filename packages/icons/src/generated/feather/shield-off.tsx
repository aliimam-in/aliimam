/**
 * Auto-generated logo component: Shield Off (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShieldOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShieldOffLogo = React.forwardRef<SVGSVGElement, ShieldOffLogoProps>(
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
      <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"/><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"/><line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )
);

ShieldOffLogo.displayName = "ShieldOffLogo";

export const ShieldOffLogoMetadata = {
  id: "shield-off",
  baseId: "shield-off",
  variant: "default",
  name: "Shield Off",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShieldOffLogo;
