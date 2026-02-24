/**
 * Auto-generated logo component: Circle Chevron Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleChevronLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleChevronLeftLogo = React.forwardRef<SVGSVGElement, CircleChevronLeftLogoProps>(
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
  <path d="m14 16-4-4 4-4" />
    </svg>
  )
);

CircleChevronLeftLogo.displayName = "CircleChevronLeftLogo";

export const CircleChevronLeftLogoMetadata = {
  id: "circle-chevron-left",
  baseId: "circle-chevron-left",
  variant: "default",
  name: "Circle Chevron Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleChevronLeftLogo;
