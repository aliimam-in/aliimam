/**
 * Auto-generated logo component: Rotate Ccw (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RotateCcwLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RotateCcwLogo = React.forwardRef<SVGSVGElement, RotateCcwLogoProps>(
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
      <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
    </svg>
  )
);

RotateCcwLogo.displayName = "RotateCcwLogo";

export const RotateCcwLogoMetadata = {
  id: "rotate-ccw",
  baseId: "rotate-ccw",
  variant: "default",
  name: "Rotate Ccw",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RotateCcwLogo;
