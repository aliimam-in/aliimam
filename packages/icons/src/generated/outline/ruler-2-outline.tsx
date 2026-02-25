/**
 * Auto-generated logo component: Ruler 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Ruler2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Ruler2OutlineLogo = React.forwardRef<SVGSVGElement, Ruler2OutlineLogoProps>(
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
      <path d="M17 3l4 4l-14 14l-4 -4l14 -14" />
  <path d="M16 7l-1.5 -1.5" />
  <path d="M13 10l-1.5 -1.5" />
  <path d="M10 13l-1.5 -1.5" />
  <path d="M7 16l-1.5 -1.5" />
    </svg>
  )
);

Ruler2OutlineLogo.displayName = "Ruler2OutlineLogo";

export const Ruler2OutlineLogoMetadata = {
  id: "ruler-2-outline",
  baseId: "ruler-2-outline",
  variant: "default",
  name: "Ruler 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ruler2OutlineLogo;
