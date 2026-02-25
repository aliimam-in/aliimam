/**
 * Auto-generated logo component: Stretching 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Stretching2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Stretching2OutlineLogo = React.forwardRef<SVGSVGElement, Stretching2OutlineLogoProps>(
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
      <path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M6.5 21l3.5 -5" />
  <path d="M5 11l7 -2" />
  <path d="M16 21l-4 -7v-5l7 -4" />
    </svg>
  )
);

Stretching2OutlineLogo.displayName = "Stretching2OutlineLogo";

export const Stretching2OutlineLogoMetadata = {
  id: "stretching-2-outline",
  baseId: "stretching-2-outline",
  variant: "default",
  name: "Stretching 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Stretching2OutlineLogo;
