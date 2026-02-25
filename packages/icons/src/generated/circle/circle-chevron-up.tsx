/**
 * Auto-generated logo component: Circle Chevron Up (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleChevronUpLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleChevronUpLogo = React.forwardRef<SVGSVGElement, CircleChevronUpLogoProps>(
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
  <path d="m8 14 4-4 4 4" />
    </svg>
  )
);

CircleChevronUpLogo.displayName = "CircleChevronUpLogo";

export const CircleChevronUpLogoMetadata = {
  id: "circle-chevron-up",
  baseId: "circle-chevron-up",
  variant: "default",
  name: "Circle Chevron Up",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleChevronUpLogo;
