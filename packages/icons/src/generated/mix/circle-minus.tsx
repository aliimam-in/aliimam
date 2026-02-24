/**
 * Auto-generated logo component: Circle Minus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleMinusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleMinusLogo = React.forwardRef<SVGSVGElement, CircleMinusLogoProps>(
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
  <path d="M8 12h8" />
    </svg>
  )
);

CircleMinusLogo.displayName = "CircleMinusLogo";

export const CircleMinusLogoMetadata = {
  id: "circle-minus",
  baseId: "circle-minus",
  variant: "default",
  name: "Circle Minus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleMinusLogo;
