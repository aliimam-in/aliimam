/**
 * Auto-generated logo component: Circle Dollar Sign (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleDollarSignLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleDollarSignLogo = React.forwardRef<SVGSVGElement, CircleDollarSignLogoProps>(
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
  <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
  <path d="M12 18V6" />
    </svg>
  )
);

CircleDollarSignLogo.displayName = "CircleDollarSignLogo";

export const CircleDollarSignLogoMetadata = {
  id: "circle-dollar-sign",
  baseId: "circle-dollar-sign",
  variant: "default",
  name: "Circle Dollar Sign",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleDollarSignLogo;
