/**
 * Auto-generated logo component: Circle (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleLogo = React.forwardRef<SVGSVGElement, CircleLogoProps>(
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
    </svg>
  )
);

CircleLogo.displayName = "CircleLogo";

export const CircleLogoMetadata = {
  id: "circle",
  baseId: "circle",
  variant: "default",
  name: "Circle",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleLogo;
