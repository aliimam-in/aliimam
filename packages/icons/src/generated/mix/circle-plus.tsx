/**
 * Auto-generated logo component: Circle Plus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CirclePlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CirclePlusLogo = React.forwardRef<SVGSVGElement, CirclePlusLogoProps>(
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
  <path d="M12 8v8" />
    </svg>
  )
);

CirclePlusLogo.displayName = "CirclePlusLogo";

export const CirclePlusLogoMetadata = {
  id: "circle-plus",
  baseId: "circle-plus",
  variant: "default",
  name: "Circle Plus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CirclePlusLogo;
