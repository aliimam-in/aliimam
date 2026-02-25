/**
 * Auto-generated logo component: Ironing 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Ironing2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Ironing2OutlineLogo = React.forwardRef<SVGSVGElement, Ironing2OutlineLogoProps>(
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
      <path d="M10 15h.01" />
  <path d="M9 6h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.985 1.164h-16.82a7 7 0 0 1 7 -7h9.8" />
  <path d="M14 15h.01" />
    </svg>
  )
);

Ironing2OutlineLogo.displayName = "Ironing2OutlineLogo";

export const Ironing2OutlineLogoMetadata = {
  id: "ironing-2-outline",
  baseId: "ironing-2-outline",
  variant: "default",
  name: "Ironing 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Ironing2OutlineLogo;
