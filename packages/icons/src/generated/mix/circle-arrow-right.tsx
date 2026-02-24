/**
 * Auto-generated logo component: Circle Arrow Right (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleArrowRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleArrowRightLogo = React.forwardRef<SVGSVGElement, CircleArrowRightLogoProps>(
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
  <path d="m12 16 4-4-4-4" />
  <path d="M8 12h8" />
    </svg>
  )
);

CircleArrowRightLogo.displayName = "CircleArrowRightLogo";

export const CircleArrowRightLogoMetadata = {
  id: "circle-arrow-right",
  baseId: "circle-arrow-right",
  variant: "default",
  name: "Circle Arrow Right",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleArrowRightLogo;
