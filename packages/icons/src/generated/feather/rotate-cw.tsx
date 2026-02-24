/**
 * Auto-generated logo component: Rotate Cw (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RotateCwLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RotateCwLogo = React.forwardRef<SVGSVGElement, RotateCwLogoProps>(
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
      <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
    </svg>
  )
);

RotateCwLogo.displayName = "RotateCwLogo";

export const RotateCwLogoMetadata = {
  id: "rotate-cw",
  baseId: "rotate-cw",
  variant: "default",
  name: "Rotate Cw",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RotateCwLogo;
