/**
 * Auto-generated logo component: Circle Arrow Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleArrowLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleArrowLeftLogo = React.forwardRef<SVGSVGElement, CircleArrowLeftLogoProps>(
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
  <path d="m12 8-4 4 4 4" />
  <path d="M16 12H8" />
    </svg>
  )
);

CircleArrowLeftLogo.displayName = "CircleArrowLeftLogo";

export const CircleArrowLeftLogoMetadata = {
  id: "circle-arrow-left",
  baseId: "circle-arrow-left",
  variant: "default",
  name: "Circle Arrow Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleArrowLeftLogo;
