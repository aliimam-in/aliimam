/**
 * Auto-generated logo component: Circle Arrow Out Down Left (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleArrowOutDownLeftLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleArrowOutDownLeftLogo = React.forwardRef<SVGSVGElement, CircleArrowOutDownLeftLogoProps>(
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
      <path d="M2 12a10 10 0 1 1 10 10" />
  <path d="m2 22 10-10" />
  <path d="M8 22H2v-6" />
    </svg>
  )
);

CircleArrowOutDownLeftLogo.displayName = "CircleArrowOutDownLeftLogo";

export const CircleArrowOutDownLeftLogoMetadata = {
  id: "circle-arrow-out-down-left",
  baseId: "circle-arrow-out-down-left",
  variant: "default",
  name: "Circle Arrow Out Down Left",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleArrowOutDownLeftLogo;
