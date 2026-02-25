/**
 * Auto-generated logo component: Circle Chevron Right (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleChevronRightLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleChevronRightLogo = React.forwardRef<SVGSVGElement, CircleChevronRightLogoProps>(
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
  <path d="m10 8 4 4-4 4" />
    </svg>
  )
);

CircleChevronRightLogo.displayName = "CircleChevronRightLogo";

export const CircleChevronRightLogoMetadata = {
  id: "circle-chevron-right",
  baseId: "circle-chevron-right",
  variant: "default",
  name: "Circle Chevron Right",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleChevronRightLogo;
