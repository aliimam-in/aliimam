/**
 * Auto-generated logo component: Poo Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PooOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PooOutlineLogo = React.forwardRef<SVGSVGElement, PooOutlineLogoProps>(
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
      <path d="M10 12h.01" />
  <path d="M14 12h.01" />
  <path d="M10 16a3.5 3.5 0 0 0 4 0" />
  <path d="M11 4c2 0 3.5 1.5 3.5 4l.164 0a2.5 2.5 0 0 1 2.196 3.32a3 3 0 0 1 1.615 3.063a3 3 0 0 1 -1.299 5.607l-.176 0h-10a3 3 0 0 1 -1.474 -5.613a3 3 0 0 1 1.615 -3.062a2.5 2.5 0 0 1 2.195 -3.32l.164 0c1.5 0 2.5 -2 1.5 -4l0 .005" />
    </svg>
  )
);

PooOutlineLogo.displayName = "PooOutlineLogo";

export const PooOutlineLogoMetadata = {
  id: "poo-outline",
  baseId: "poo-outline",
  variant: "default",
  name: "Poo Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PooOutlineLogo;
