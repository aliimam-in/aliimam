/**
 * Auto-generated logo component: Physotherapist Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PhysotherapistOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PhysotherapistOutlineLogo = React.forwardRef<SVGSVGElement, PhysotherapistOutlineLogoProps>(
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
      <path d="M9 15l-1 -3l4 -2l4 1h3.5" />
  <path d="M3 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 6a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 17v-7" />
  <path d="M8 20h7l1 -4l4 -2" />
  <path d="M18 20h3" />
    </svg>
  )
);

PhysotherapistOutlineLogo.displayName = "PhysotherapistOutlineLogo";

export const PhysotherapistOutlineLogoMetadata = {
  id: "physotherapist-outline",
  baseId: "physotherapist-outline",
  variant: "default",
  name: "Physotherapist Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PhysotherapistOutlineLogo;
