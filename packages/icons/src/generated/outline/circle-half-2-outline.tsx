/**
 * Auto-generated logo component: Circle Half 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleHalf2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleHalf2OutlineLogo = React.forwardRef<SVGSVGElement, CircleHalf2OutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 3v18" />
  <path d="M12 14l7 -7" />
  <path d="M12 19l8.5 -8.5" />
  <path d="M12 9l4.5 -4.5" />
    </svg>
  )
);

CircleHalf2OutlineLogo.displayName = "CircleHalf2OutlineLogo";

export const CircleHalf2OutlineLogoMetadata = {
  id: "circle-half-2-outline",
  baseId: "circle-half-2-outline",
  variant: "default",
  name: "Circle Half 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleHalf2OutlineLogo;
