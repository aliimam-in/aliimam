/**
 * Auto-generated logo component: Rotate Ccw (default)
 * Category: others
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
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
  <path d="M3 3v5h5" />
    </svg>
  )
);

RotateCcwLogo.displayName = "RotateCcwLogo";

export const RotateCcwLogoMetadata = {
  id: "rotate-ccw",
  baseId: "rotate-ccw",
  variant: "default",
  name: "Rotate Ccw",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RotateCcwLogo;
