/**
 * Auto-generated logo component: Circle Equal (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleEqualLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleEqualLogo = React.forwardRef<SVGSVGElement, CircleEqualLogoProps>(
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
  <path d="M7 10h10" />
  <path d="M7 14h10" />
    </svg>
  )
);

CircleEqualLogo.displayName = "CircleEqualLogo";

export const CircleEqualLogoMetadata = {
  id: "circle-equal",
  baseId: "circle-equal",
  variant: "default",
  name: "Circle Equal",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleEqualLogo;
