/**
 * Auto-generated logo component: Circle X (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleXLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleXLogo = React.forwardRef<SVGSVGElement, CircleXLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <path d="m15 9-6 6" />
  <path d="m9 9 6 6" />
    </svg>
  )
);

CircleXLogo.displayName = "CircleXLogo";

export const CircleXLogoMetadata = {
  id: "circle-x",
  baseId: "circle-x",
  variant: "default",
  name: "Circle X",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleXLogo;
