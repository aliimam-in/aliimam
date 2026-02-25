/**
 * Auto-generated logo component: Umbrella 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Umbrella2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Umbrella2OutlineLogo = React.forwardRef<SVGSVGElement, Umbrella2OutlineLogoProps>(
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
      <path d="M5.343 7.343a8 8 0 1 1 11.314 11.314l-11.314 -11.314" />
  <path d="M10.828 13.34l-4.242 4.243a2 2 0 1 0 2.828 2.828" />
    </svg>
  )
);

Umbrella2OutlineLogo.displayName = "Umbrella2OutlineLogo";

export const Umbrella2OutlineLogoMetadata = {
  id: "umbrella-2-outline",
  baseId: "umbrella-2-outline",
  variant: "default",
  name: "Umbrella 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Umbrella2OutlineLogo;
