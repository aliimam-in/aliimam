/**
 * Auto-generated logo component: Circle Small (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleSmallLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleSmallLogo = React.forwardRef<SVGSVGElement, CircleSmallLogoProps>(
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
      <circle cx="12" cy="12" r="6" />
    </svg>
  )
);

CircleSmallLogo.displayName = "CircleSmallLogo";

export const CircleSmallLogoMetadata = {
  id: "circle-small",
  baseId: "circle-small",
  variant: "default",
  name: "Circle Small",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleSmallLogo;
