/**
 * Auto-generated logo component: Rotate Cw (default)
 * Category: others
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
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
  <path d="M21 3v5h-5" />
    </svg>
  )
);

RotateCwLogo.displayName = "RotateCwLogo";

export const RotateCwLogoMetadata = {
  id: "rotate-cw",
  baseId: "rotate-cw",
  variant: "default",
  name: "Rotate Cw",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RotateCwLogo;
